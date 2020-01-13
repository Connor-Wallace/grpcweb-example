/**
 * @fileoverview gRPC-Web generated client stub for pps
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */


const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

// var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var client_pfs_pfs_pb = require('./pfs_pb.js')
const proto = {};
proto.pps = require('./pps_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pps.APIClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pps.APIPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.CreateJobRequest,
 *   !proto.pps.Job>}
 */
const methodDescriptor_API_CreateJob = new grpc.web.MethodDescriptor(
  '/pps.API/CreateJob',
  grpc.web.MethodType.UNARY,
  proto.pps.CreateJobRequest,
  proto.pps.Job,
  /**
   * @param {!proto.pps.CreateJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.Job.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.CreateJobRequest,
 *   !proto.pps.Job>}
 */
const methodInfo_API_CreateJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pps.Job,
  /**
   * @param {!proto.pps.CreateJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.Job.deserializeBinary
);


/**
 * @param {!proto.pps.CreateJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pps.Job)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pps.Job>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.createJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/CreateJob',
      request,
      metadata || {},
      methodDescriptor_API_CreateJob,
      callback);
};


/**
 * @param {!proto.pps.CreateJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pps.Job>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.createJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/CreateJob',
      request,
      metadata || {},
      methodDescriptor_API_CreateJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.InspectJobRequest,
 *   !proto.pps.JobInfo>}
 */
const methodDescriptor_API_InspectJob = new grpc.web.MethodDescriptor(
  '/pps.API/InspectJob',
  grpc.web.MethodType.UNARY,
  proto.pps.InspectJobRequest,
  proto.pps.JobInfo,
  /**
   * @param {!proto.pps.InspectJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.JobInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.InspectJobRequest,
 *   !proto.pps.JobInfo>}
 */
const methodInfo_API_InspectJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pps.JobInfo,
  /**
   * @param {!proto.pps.InspectJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.JobInfo.deserializeBinary
);


/**
 * @param {!proto.pps.InspectJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pps.JobInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pps.JobInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.inspectJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/InspectJob',
      request,
      metadata || {},
      methodDescriptor_API_InspectJob,
      callback);
};


/**
 * @param {!proto.pps.InspectJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pps.JobInfo>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.inspectJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/InspectJob',
      request,
      metadata || {},
      methodDescriptor_API_InspectJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.ListJobRequest,
 *   !proto.pps.JobInfos>}
 */
const methodDescriptor_API_ListJob = new grpc.web.MethodDescriptor(
  '/pps.API/ListJob',
  grpc.web.MethodType.UNARY,
  proto.pps.ListJobRequest,
  proto.pps.JobInfos,
  /**
   * @param {!proto.pps.ListJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.JobInfos.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.ListJobRequest,
 *   !proto.pps.JobInfos>}
 */
const methodInfo_API_ListJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pps.JobInfos,
  /**
   * @param {!proto.pps.ListJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.JobInfos.deserializeBinary
);


/**
 * @param {!proto.pps.ListJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pps.JobInfos)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pps.JobInfos>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.listJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/ListJob',
      request,
      metadata || {},
      methodDescriptor_API_ListJob,
      callback);
};


/**
 * @param {!proto.pps.ListJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pps.JobInfos>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.listJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/ListJob',
      request,
      metadata || {},
      methodDescriptor_API_ListJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.ListJobRequest,
 *   !proto.pps.JobInfo>}
 */
const methodDescriptor_API_ListJobStream = new grpc.web.MethodDescriptor(
  '/pps.API/ListJobStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pps.ListJobRequest,
  proto.pps.JobInfo,
  /**
   * @param {!proto.pps.ListJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.JobInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.ListJobRequest,
 *   !proto.pps.JobInfo>}
 */
const methodInfo_API_ListJobStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pps.JobInfo,
  /**
   * @param {!proto.pps.ListJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.JobInfo.deserializeBinary
);


/**
 * @param {!proto.pps.ListJobRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pps.JobInfo>}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.listJobStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pps.API/ListJobStream',
      request,
      metadata || {},
      methodDescriptor_API_ListJobStream);
};


/**
 * @param {!proto.pps.ListJobRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pps.JobInfo>}
 *     The XHR Node Readable Stream
 */
proto.pps.APIPromiseClient.prototype.listJobStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pps.API/ListJobStream',
      request,
      metadata || {},
      methodDescriptor_API_ListJobStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.FlushJobRequest,
 *   !proto.pps.JobInfo>}
 */
const methodDescriptor_API_FlushJob = new grpc.web.MethodDescriptor(
  '/pps.API/FlushJob',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pps.FlushJobRequest,
  proto.pps.JobInfo,
  /**
   * @param {!proto.pps.FlushJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.JobInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.FlushJobRequest,
 *   !proto.pps.JobInfo>}
 */
const methodInfo_API_FlushJob = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pps.JobInfo,
  /**
   * @param {!proto.pps.FlushJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.JobInfo.deserializeBinary
);


/**
 * @param {!proto.pps.FlushJobRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pps.JobInfo>}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.flushJob =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pps.API/FlushJob',
      request,
      metadata || {},
      methodDescriptor_API_FlushJob);
};


/**
 * @param {!proto.pps.FlushJobRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pps.JobInfo>}
 *     The XHR Node Readable Stream
 */
proto.pps.APIPromiseClient.prototype.flushJob =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pps.API/FlushJob',
      request,
      metadata || {},
      methodDescriptor_API_FlushJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.DeleteJobRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_DeleteJob = new grpc.web.MethodDescriptor(
  '/pps.API/DeleteJob',
  grpc.web.MethodType.UNARY,
  proto.pps.DeleteJobRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.DeleteJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.DeleteJobRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_DeleteJob = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.DeleteJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pps.DeleteJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.deleteJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/DeleteJob',
      request,
      metadata || {},
      methodDescriptor_API_DeleteJob,
      callback);
};


/**
 * @param {!proto.pps.DeleteJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.deleteJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/DeleteJob',
      request,
      metadata || {},
      methodDescriptor_API_DeleteJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.StopJobRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_StopJob = new grpc.web.MethodDescriptor(
  '/pps.API/StopJob',
  grpc.web.MethodType.UNARY,
  proto.pps.StopJobRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.StopJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.StopJobRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_StopJob = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.StopJobRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pps.StopJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.stopJob =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/StopJob',
      request,
      metadata || {},
      methodDescriptor_API_StopJob,
      callback);
};


/**
 * @param {!proto.pps.StopJobRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.stopJob =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/StopJob',
      request,
      metadata || {},
      methodDescriptor_API_StopJob);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.InspectDatumRequest,
 *   !proto.pps.DatumInfo>}
 */
const methodDescriptor_API_InspectDatum = new grpc.web.MethodDescriptor(
  '/pps.API/InspectDatum',
  grpc.web.MethodType.UNARY,
  proto.pps.InspectDatumRequest,
  proto.pps.DatumInfo,
  /**
   * @param {!proto.pps.InspectDatumRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.DatumInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.InspectDatumRequest,
 *   !proto.pps.DatumInfo>}
 */
const methodInfo_API_InspectDatum = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pps.DatumInfo,
  /**
   * @param {!proto.pps.InspectDatumRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.DatumInfo.deserializeBinary
);


/**
 * @param {!proto.pps.InspectDatumRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pps.DatumInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pps.DatumInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.inspectDatum =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/InspectDatum',
      request,
      metadata || {},
      methodDescriptor_API_InspectDatum,
      callback);
};


/**
 * @param {!proto.pps.InspectDatumRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pps.DatumInfo>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.inspectDatum =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/InspectDatum',
      request,
      metadata || {},
      methodDescriptor_API_InspectDatum);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.ListDatumRequest,
 *   !proto.pps.ListDatumResponse>}
 */
const methodDescriptor_API_ListDatum = new grpc.web.MethodDescriptor(
  '/pps.API/ListDatum',
  grpc.web.MethodType.UNARY,
  proto.pps.ListDatumRequest,
  proto.pps.ListDatumResponse,
  /**
   * @param {!proto.pps.ListDatumRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.ListDatumResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.ListDatumRequest,
 *   !proto.pps.ListDatumResponse>}
 */
const methodInfo_API_ListDatum = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pps.ListDatumResponse,
  /**
   * @param {!proto.pps.ListDatumRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.ListDatumResponse.deserializeBinary
);


/**
 * @param {!proto.pps.ListDatumRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pps.ListDatumResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pps.ListDatumResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.listDatum =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/ListDatum',
      request,
      metadata || {},
      methodDescriptor_API_ListDatum,
      callback);
};


/**
 * @param {!proto.pps.ListDatumRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pps.ListDatumResponse>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.listDatum =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/ListDatum',
      request,
      metadata || {},
      methodDescriptor_API_ListDatum);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.ListDatumRequest,
 *   !proto.pps.ListDatumStreamResponse>}
 */
const methodDescriptor_API_ListDatumStream = new grpc.web.MethodDescriptor(
  '/pps.API/ListDatumStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pps.ListDatumRequest,
  proto.pps.ListDatumStreamResponse,
  /**
   * @param {!proto.pps.ListDatumRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.ListDatumStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.ListDatumRequest,
 *   !proto.pps.ListDatumStreamResponse>}
 */
const methodInfo_API_ListDatumStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pps.ListDatumStreamResponse,
  /**
   * @param {!proto.pps.ListDatumRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.ListDatumStreamResponse.deserializeBinary
);


/**
 * @param {!proto.pps.ListDatumRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pps.ListDatumStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.listDatumStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pps.API/ListDatumStream',
      request,
      metadata || {},
      methodDescriptor_API_ListDatumStream);
};


/**
 * @param {!proto.pps.ListDatumRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pps.ListDatumStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.pps.APIPromiseClient.prototype.listDatumStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pps.API/ListDatumStream',
      request,
      metadata || {},
      methodDescriptor_API_ListDatumStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.RestartDatumRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_RestartDatum = new grpc.web.MethodDescriptor(
  '/pps.API/RestartDatum',
  grpc.web.MethodType.UNARY,
  proto.pps.RestartDatumRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.RestartDatumRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.RestartDatumRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_RestartDatum = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.RestartDatumRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pps.RestartDatumRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.restartDatum =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/RestartDatum',
      request,
      metadata || {},
      methodDescriptor_API_RestartDatum,
      callback);
};


/**
 * @param {!proto.pps.RestartDatumRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.restartDatum =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/RestartDatum',
      request,
      metadata || {},
      methodDescriptor_API_RestartDatum);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.CreatePipelineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_CreatePipeline = new grpc.web.MethodDescriptor(
  '/pps.API/CreatePipeline',
  grpc.web.MethodType.UNARY,
  proto.pps.CreatePipelineRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.CreatePipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.CreatePipelineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_CreatePipeline = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.CreatePipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pps.CreatePipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.createPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/CreatePipeline',
      request,
      metadata || {},
      methodDescriptor_API_CreatePipeline,
      callback);
};


/**
 * @param {!proto.pps.CreatePipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.createPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/CreatePipeline',
      request,
      metadata || {},
      methodDescriptor_API_CreatePipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.InspectPipelineRequest,
 *   !proto.pps.PipelineInfo>}
 */
const methodDescriptor_API_InspectPipeline = new grpc.web.MethodDescriptor(
  '/pps.API/InspectPipeline',
  grpc.web.MethodType.UNARY,
  proto.pps.InspectPipelineRequest,
  proto.pps.PipelineInfo,
  /**
   * @param {!proto.pps.InspectPipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.PipelineInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.InspectPipelineRequest,
 *   !proto.pps.PipelineInfo>}
 */
const methodInfo_API_InspectPipeline = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pps.PipelineInfo,
  /**
   * @param {!proto.pps.InspectPipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.PipelineInfo.deserializeBinary
);


/**
 * @param {!proto.pps.InspectPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pps.PipelineInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pps.PipelineInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.inspectPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/InspectPipeline',
      request,
      metadata || {},
      methodDescriptor_API_InspectPipeline,
      callback);
};


/**
 * @param {!proto.pps.InspectPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pps.PipelineInfo>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.inspectPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/InspectPipeline',
      request,
      metadata || {},
      methodDescriptor_API_InspectPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.ListPipelineRequest,
 *   !proto.pps.PipelineInfos>}
 */
const methodDescriptor_API_ListPipeline = new grpc.web.MethodDescriptor(
  '/pps.API/ListPipeline',
  grpc.web.MethodType.UNARY,
  proto.pps.ListPipelineRequest,
  proto.pps.PipelineInfos,
  /**
   * @param {!proto.pps.ListPipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.PipelineInfos.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.ListPipelineRequest,
 *   !proto.pps.PipelineInfos>}
 */
const methodInfo_API_ListPipeline = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pps.PipelineInfos,
  /**
   * @param {!proto.pps.ListPipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.PipelineInfos.deserializeBinary
);


/**
 * @param {!proto.pps.ListPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pps.PipelineInfos)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pps.PipelineInfos>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.listPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/ListPipeline',
      request,
      metadata || {},
      methodDescriptor_API_ListPipeline,
      callback);
};


/**
 * @param {!proto.pps.ListPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pps.PipelineInfos>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.listPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/ListPipeline',
      request,
      metadata || {},
      methodDescriptor_API_ListPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.DeletePipelineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_DeletePipeline = new grpc.web.MethodDescriptor(
  '/pps.API/DeletePipeline',
  grpc.web.MethodType.UNARY,
  proto.pps.DeletePipelineRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.DeletePipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.DeletePipelineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_DeletePipeline = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.DeletePipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pps.DeletePipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.deletePipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/DeletePipeline',
      request,
      metadata || {},
      methodDescriptor_API_DeletePipeline,
      callback);
};


/**
 * @param {!proto.pps.DeletePipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.deletePipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/DeletePipeline',
      request,
      metadata || {},
      methodDescriptor_API_DeletePipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.StartPipelineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_StartPipeline = new grpc.web.MethodDescriptor(
  '/pps.API/StartPipeline',
  grpc.web.MethodType.UNARY,
  proto.pps.StartPipelineRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.StartPipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.StartPipelineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_StartPipeline = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.StartPipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pps.StartPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.startPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/StartPipeline',
      request,
      metadata || {},
      methodDescriptor_API_StartPipeline,
      callback);
};


/**
 * @param {!proto.pps.StartPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.startPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/StartPipeline',
      request,
      metadata || {},
      methodDescriptor_API_StartPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.StopPipelineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_StopPipeline = new grpc.web.MethodDescriptor(
  '/pps.API/StopPipeline',
  grpc.web.MethodType.UNARY,
  proto.pps.StopPipelineRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.StopPipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.StopPipelineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_StopPipeline = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.StopPipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pps.StopPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.stopPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/StopPipeline',
      request,
      metadata || {},
      methodDescriptor_API_StopPipeline,
      callback);
};


/**
 * @param {!proto.pps.StopPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.stopPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/StopPipeline',
      request,
      metadata || {},
      methodDescriptor_API_StopPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.RunPipelineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_RunPipeline = new grpc.web.MethodDescriptor(
  '/pps.API/RunPipeline',
  grpc.web.MethodType.UNARY,
  proto.pps.RunPipelineRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.RunPipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.RunPipelineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_RunPipeline = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.RunPipelineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pps.RunPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.runPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/RunPipeline',
      request,
      metadata || {},
      methodDescriptor_API_RunPipeline,
      callback);
};


/**
 * @param {!proto.pps.RunPipelineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.runPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/RunPipeline',
      request,
      metadata || {},
      methodDescriptor_API_RunPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.RunCronRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_RunCron = new grpc.web.MethodDescriptor(
  '/pps.API/RunCron',
  grpc.web.MethodType.UNARY,
  proto.pps.RunCronRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.RunCronRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.RunCronRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_RunCron = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.RunCronRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pps.RunCronRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.runCron =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/RunCron',
      request,
      metadata || {},
      methodDescriptor_API_RunCron,
      callback);
};


/**
 * @param {!proto.pps.RunCronRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.runCron =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/RunCron',
      request,
      metadata || {},
      methodDescriptor_API_RunCron);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_DeleteAll = new grpc.web.MethodDescriptor(
  '/pps.API/DeleteAll',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_DeleteAll = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.deleteAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/DeleteAll',
      request,
      metadata || {},
      methodDescriptor_API_DeleteAll,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.deleteAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/DeleteAll',
      request,
      metadata || {},
      methodDescriptor_API_DeleteAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.GetLogsRequest,
 *   !proto.pps.LogMessage>}
 */
const methodDescriptor_API_GetLogs = new grpc.web.MethodDescriptor(
  '/pps.API/GetLogs',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pps.GetLogsRequest,
  proto.pps.LogMessage,
  /**
   * @param {!proto.pps.GetLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.LogMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.GetLogsRequest,
 *   !proto.pps.LogMessage>}
 */
const methodInfo_API_GetLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pps.LogMessage,
  /**
   * @param {!proto.pps.GetLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.LogMessage.deserializeBinary
);


/**
 * @param {!proto.pps.GetLogsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pps.LogMessage>}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.getLogs =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pps.API/GetLogs',
      request,
      metadata || {},
      methodDescriptor_API_GetLogs);
};


/**
 * @param {!proto.pps.GetLogsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pps.LogMessage>}
 *     The XHR Node Readable Stream
 */
proto.pps.APIPromiseClient.prototype.getLogs =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pps.API/GetLogs',
      request,
      metadata || {},
      methodDescriptor_API_GetLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.GarbageCollectRequest,
 *   !proto.pps.GarbageCollectResponse>}
 */
const methodDescriptor_API_GarbageCollect = new grpc.web.MethodDescriptor(
  '/pps.API/GarbageCollect',
  grpc.web.MethodType.UNARY,
  proto.pps.GarbageCollectRequest,
  proto.pps.GarbageCollectResponse,
  /**
   * @param {!proto.pps.GarbageCollectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.GarbageCollectResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.GarbageCollectRequest,
 *   !proto.pps.GarbageCollectResponse>}
 */
const methodInfo_API_GarbageCollect = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pps.GarbageCollectResponse,
  /**
   * @param {!proto.pps.GarbageCollectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.GarbageCollectResponse.deserializeBinary
);


/**
 * @param {!proto.pps.GarbageCollectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pps.GarbageCollectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pps.GarbageCollectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.garbageCollect =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/GarbageCollect',
      request,
      metadata || {},
      methodDescriptor_API_GarbageCollect,
      callback);
};


/**
 * @param {!proto.pps.GarbageCollectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pps.GarbageCollectResponse>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.garbageCollect =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/GarbageCollect',
      request,
      metadata || {},
      methodDescriptor_API_GarbageCollect);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.ActivateAuthRequest,
 *   !proto.pps.ActivateAuthResponse>}
 */
const methodDescriptor_API_ActivateAuth = new grpc.web.MethodDescriptor(
  '/pps.API/ActivateAuth',
  grpc.web.MethodType.UNARY,
  proto.pps.ActivateAuthRequest,
  proto.pps.ActivateAuthResponse,
  /**
   * @param {!proto.pps.ActivateAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.ActivateAuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.ActivateAuthRequest,
 *   !proto.pps.ActivateAuthResponse>}
 */
const methodInfo_API_ActivateAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pps.ActivateAuthResponse,
  /**
   * @param {!proto.pps.ActivateAuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pps.ActivateAuthResponse.deserializeBinary
);


/**
 * @param {!proto.pps.ActivateAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pps.ActivateAuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pps.ActivateAuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.activateAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/ActivateAuth',
      request,
      metadata || {},
      methodDescriptor_API_ActivateAuth,
      callback);
};


/**
 * @param {!proto.pps.ActivateAuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pps.ActivateAuthResponse>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.activateAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/ActivateAuth',
      request,
      metadata || {},
      methodDescriptor_API_ActivateAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pps.UpdateJobStateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_UpdateJobState = new grpc.web.MethodDescriptor(
  '/pps.API/UpdateJobState',
  grpc.web.MethodType.UNARY,
  proto.pps.UpdateJobStateRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.UpdateJobStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pps.UpdateJobStateRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_UpdateJobState = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pps.UpdateJobStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pps.UpdateJobStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pps.APIClient.prototype.updateJobState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pps.API/UpdateJobState',
      request,
      metadata || {},
      methodDescriptor_API_UpdateJobState,
      callback);
};


/**
 * @param {!proto.pps.UpdateJobStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pps.APIPromiseClient.prototype.updateJobState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pps.API/UpdateJobState',
      request,
      metadata || {},
      methodDescriptor_API_UpdateJobState);
};


module.exports = proto.pps;

