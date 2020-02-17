import React, {useEffect, useState} from 'react';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';

import './App.css';
import {APIPromiseClient as PPSClient} from './pps_grpc_web_pb';
import {APIPromiseClient as PFSClient} from './pfs_grpc_web_pb';
import {ListPipelineRequest} from './pps_pb';
import {ListRepoRequest} from './pfs_pb';

cytoscape.use(dagre);

const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});

const pps = new PPSClient('http://192.168.99.101:30977', null, null);
const pfs = new PFSClient('http://192.168.99.101:30977', null, null);

enableDevTools([
  pps,
  pfs
]);

const listRepos = async () => {
    const listRepoRequest = new ListRepoRequest();

    try {
      const repoResponse = await pfs.listRepo(listRepoRequest, {});
      return repoResponse.toObject().repoInfoList;
    } catch (err) {
      console.log(err);
    }
};

const listPipelines = async () => {
  const listPipelineRequest = new ListPipelineRequest();

  try {
    const pipelineResponse = await pps.listPipeline(listPipelineRequest, {});
    return pipelineResponse.toObject().pipelineInfoList;
  } catch (err) {
    console.log(err);
  }
};

const formatEdges = (pipeline) => {
  if (pipeline.input.pfs) {
    return { data: {source: pipeline.input.pfs.repo, target: pipeline.pipeline.name }}
  }
  if (pipeline.input.crossList.length > 0) {
    return pipeline.input.crossList.map((input) => {
      return { data: {source: input.pfs.repo, target: pipeline.pipeline.name }}
    });
  }
}

const initDag = (repos, pipelines) => {
  const nodes = repos.map((repo) => {
    return {
      data: {
        ...repo,
        id: repo.repo.name,
        label: repo.repo.name
      }
    }
  });

  const edges = pipelines.flatMap(formatEdges);

  const cy = cytoscape({
    container: document.getElementById('dag'),
    style: [
      {
        selector: 'node',
        style: {
          'shape': 'hexagon',
          'background-color': '#5ba3b1',
          'content': 'data(id)',
          'font-size': '5%',
          'text-valign': 'center',
          'text-halight': 'center',
          'text-max-width': 5
        }
      },

      {
        selector: 'edge',
        style: {
          'width': 2,
          'target-arrow-shape': 'triangle',
          'line-color': '#b0a8b3',
          'target-arrow-color': '#b0a8b3',
          'curve-style': 'taxi'
          
        }
      }
    ],
    layout: {
      name: 'dagre',
      rankDir: 'LR',
      edgeSep: 100, 
      animate: 'end'
    },
    elements: { nodes, edges }
  })

  cy.nodes().lock();

  cy.on('tap', (evt) => {
    cy.nodes().forEach(node => node.style('background-color', '#5ba3b1'));
    if (evt.target !== cy && evt.target.isNode()) evt.target.style('background-color', '#582f6b');
  });
  return cy;
;}


const App = () => {
  const [repos, setRepos] = useState([]);
  const [pipelines, setPipelines] = useState([]);
  const [dag, setDag] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repos = await listRepos();
        setRepos(repos);
  
        const pipelines = await listPipelines();
        setPipelines(pipelines);

        setDag(initDag(repos, pipelines));
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);


  return (
    <div id="dag"></div>
  ); 
}

export default App;
