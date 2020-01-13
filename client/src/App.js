import React, {useEffect, useState} from 'react';
import cytoscape from 'cytoscape';
import logo from './logo.svg';
import './App.css';
import {APIPromiseClient as PPSClient} from './pps_grpc_web_pb';
import {APIPromiseClient as PFSClient} from './pfs_grpc_web_pb';
import {ListPipelineRequest} from './pps_pb';
import {ListRepoRequest} from './pfs_pb';


const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});

const pps = new PPSClient('http://192.168.99.100:30347', null, null);
const pfs = new PFSClient('http://192.168.99.100:30347', null, null);

enableDevTools([
  pps,
  pfs
]);

const listRepos = async () => {
    const listRepoRequest = new ListRepoRequest();

    try {
      const repoResponse = await pfs.listRepo(listRepoRequest, {});
      return repoResponse.toObject();
    } catch (err) {
      console.log(err);
    }
};

const listPipelines = async () => {
  const listPipelineRequest = new ListPipelineRequest();

  try {
    const pipelineResponse = await pps.listPipeline(listPipelineRequest, {});
    return pipelineResponse.toObject();
  } catch (err) {
    console.log(err);
  }
};

const initializeDAG = () => {

;}


const App = () => {
  const [repos, setRepos] = useState({});
  const [pipelines, setPipelines] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repos = await listRepos();
        setRepos(repos);
  
        const pipelines = await listPipelines();
        setPipelines(pipelines);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  console.log(repos, pipelines)

  return (
    <div id="dag"></div>
  ); 
}

export default App;
