/**
 * @fileoverview gRPC-Web generated client stub for pfs
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */


const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

// var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

// var client_auth_auth_pb = require('../../client/auth/auth_pb.js')
const proto = {};
proto.pfs = require('./pfs_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pfs.APIClient =
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
proto.pfs.APIPromiseClient =
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
 *   !proto.pfs.CreateRepoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_CreateRepo = new grpc.web.MethodDescriptor(
  '/pfs.API/CreateRepo',
  grpc.web.MethodType.UNARY,
  proto.pfs.CreateRepoRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.CreateRepoRequest} request
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
 *   !proto.pfs.CreateRepoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_CreateRepo = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.CreateRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pfs.CreateRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.createRepo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/CreateRepo',
      request,
      metadata || {},
      methodDescriptor_API_CreateRepo,
      callback);
};


/**
 * @param {!proto.pfs.CreateRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.createRepo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/CreateRepo',
      request,
      metadata || {},
      methodDescriptor_API_CreateRepo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.InspectRepoRequest,
 *   !proto.pfs.RepoInfo>}
 */
const methodDescriptor_API_InspectRepo = new grpc.web.MethodDescriptor(
  '/pfs.API/InspectRepo',
  grpc.web.MethodType.UNARY,
  proto.pfs.InspectRepoRequest,
  proto.pfs.RepoInfo,
  /**
   * @param {!proto.pfs.InspectRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.RepoInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.InspectRepoRequest,
 *   !proto.pfs.RepoInfo>}
 */
const methodInfo_API_InspectRepo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.RepoInfo,
  /**
   * @param {!proto.pfs.InspectRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.RepoInfo.deserializeBinary
);


/**
 * @param {!proto.pfs.InspectRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.RepoInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.RepoInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.inspectRepo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/InspectRepo',
      request,
      metadata || {},
      methodDescriptor_API_InspectRepo,
      callback);
};


/**
 * @param {!proto.pfs.InspectRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.RepoInfo>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.inspectRepo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/InspectRepo',
      request,
      metadata || {},
      methodDescriptor_API_InspectRepo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.ListRepoRequest,
 *   !proto.pfs.ListRepoResponse>}
 */
const methodDescriptor_API_ListRepo = new grpc.web.MethodDescriptor(
  '/pfs.API/ListRepo',
  grpc.web.MethodType.UNARY,
  proto.pfs.ListRepoRequest,
  proto.pfs.ListRepoResponse,
  /**
   * @param {!proto.pfs.ListRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.ListRepoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.ListRepoRequest,
 *   !proto.pfs.ListRepoResponse>}
 */
const methodInfo_API_ListRepo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.ListRepoResponse,
  /**
   * @param {!proto.pfs.ListRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.ListRepoResponse.deserializeBinary
);


/**
 * @param {!proto.pfs.ListRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.ListRepoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.ListRepoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.listRepo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/ListRepo',
      request,
      metadata || {},
      methodDescriptor_API_ListRepo,
      callback);
};


/**
 * @param {!proto.pfs.ListRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.ListRepoResponse>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.listRepo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/ListRepo',
      request,
      metadata || {},
      methodDescriptor_API_ListRepo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.DeleteRepoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_DeleteRepo = new grpc.web.MethodDescriptor(
  '/pfs.API/DeleteRepo',
  grpc.web.MethodType.UNARY,
  proto.pfs.DeleteRepoRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.DeleteRepoRequest} request
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
 *   !proto.pfs.DeleteRepoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_DeleteRepo = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.DeleteRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pfs.DeleteRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.deleteRepo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/DeleteRepo',
      request,
      metadata || {},
      methodDescriptor_API_DeleteRepo,
      callback);
};


/**
 * @param {!proto.pfs.DeleteRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.deleteRepo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/DeleteRepo',
      request,
      metadata || {},
      methodDescriptor_API_DeleteRepo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.StartCommitRequest,
 *   !proto.pfs.Commit>}
 */
const methodDescriptor_API_StartCommit = new grpc.web.MethodDescriptor(
  '/pfs.API/StartCommit',
  grpc.web.MethodType.UNARY,
  proto.pfs.StartCommitRequest,
  proto.pfs.Commit,
  /**
   * @param {!proto.pfs.StartCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.Commit.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.StartCommitRequest,
 *   !proto.pfs.Commit>}
 */
const methodInfo_API_StartCommit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.Commit,
  /**
   * @param {!proto.pfs.StartCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.Commit.deserializeBinary
);


/**
 * @param {!proto.pfs.StartCommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.Commit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.Commit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.startCommit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/StartCommit',
      request,
      metadata || {},
      methodDescriptor_API_StartCommit,
      callback);
};


/**
 * @param {!proto.pfs.StartCommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.Commit>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.startCommit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/StartCommit',
      request,
      metadata || {},
      methodDescriptor_API_StartCommit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.FinishCommitRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_FinishCommit = new grpc.web.MethodDescriptor(
  '/pfs.API/FinishCommit',
  grpc.web.MethodType.UNARY,
  proto.pfs.FinishCommitRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.FinishCommitRequest} request
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
 *   !proto.pfs.FinishCommitRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_FinishCommit = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.FinishCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pfs.FinishCommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.finishCommit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/FinishCommit',
      request,
      metadata || {},
      methodDescriptor_API_FinishCommit,
      callback);
};


/**
 * @param {!proto.pfs.FinishCommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.finishCommit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/FinishCommit',
      request,
      metadata || {},
      methodDescriptor_API_FinishCommit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.InspectCommitRequest,
 *   !proto.pfs.CommitInfo>}
 */
const methodDescriptor_API_InspectCommit = new grpc.web.MethodDescriptor(
  '/pfs.API/InspectCommit',
  grpc.web.MethodType.UNARY,
  proto.pfs.InspectCommitRequest,
  proto.pfs.CommitInfo,
  /**
   * @param {!proto.pfs.InspectCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.CommitInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.InspectCommitRequest,
 *   !proto.pfs.CommitInfo>}
 */
const methodInfo_API_InspectCommit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.CommitInfo,
  /**
   * @param {!proto.pfs.InspectCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.CommitInfo.deserializeBinary
);


/**
 * @param {!proto.pfs.InspectCommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.CommitInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.CommitInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.inspectCommit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/InspectCommit',
      request,
      metadata || {},
      methodDescriptor_API_InspectCommit,
      callback);
};


/**
 * @param {!proto.pfs.InspectCommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.CommitInfo>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.inspectCommit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/InspectCommit',
      request,
      metadata || {},
      methodDescriptor_API_InspectCommit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.ListCommitRequest,
 *   !proto.pfs.CommitInfos>}
 */
const methodDescriptor_API_ListCommit = new grpc.web.MethodDescriptor(
  '/pfs.API/ListCommit',
  grpc.web.MethodType.UNARY,
  proto.pfs.ListCommitRequest,
  proto.pfs.CommitInfos,
  /**
   * @param {!proto.pfs.ListCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.CommitInfos.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.ListCommitRequest,
 *   !proto.pfs.CommitInfos>}
 */
const methodInfo_API_ListCommit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.CommitInfos,
  /**
   * @param {!proto.pfs.ListCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.CommitInfos.deserializeBinary
);


/**
 * @param {!proto.pfs.ListCommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.CommitInfos)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.CommitInfos>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.listCommit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/ListCommit',
      request,
      metadata || {},
      methodDescriptor_API_ListCommit,
      callback);
};


/**
 * @param {!proto.pfs.ListCommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.CommitInfos>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.listCommit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/ListCommit',
      request,
      metadata || {},
      methodDescriptor_API_ListCommit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.ListCommitRequest,
 *   !proto.pfs.CommitInfo>}
 */
const methodDescriptor_API_ListCommitStream = new grpc.web.MethodDescriptor(
  '/pfs.API/ListCommitStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.ListCommitRequest,
  proto.pfs.CommitInfo,
  /**
   * @param {!proto.pfs.ListCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.CommitInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.ListCommitRequest,
 *   !proto.pfs.CommitInfo>}
 */
const methodInfo_API_ListCommitStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.CommitInfo,
  /**
   * @param {!proto.pfs.ListCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.CommitInfo.deserializeBinary
);


/**
 * @param {!proto.pfs.ListCommitRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.CommitInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.listCommitStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/ListCommitStream',
      request,
      metadata || {},
      methodDescriptor_API_ListCommitStream);
};


/**
 * @param {!proto.pfs.ListCommitRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.CommitInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIPromiseClient.prototype.listCommitStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/ListCommitStream',
      request,
      metadata || {},
      methodDescriptor_API_ListCommitStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.DeleteCommitRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_DeleteCommit = new grpc.web.MethodDescriptor(
  '/pfs.API/DeleteCommit',
  grpc.web.MethodType.UNARY,
  proto.pfs.DeleteCommitRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.DeleteCommitRequest} request
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
 *   !proto.pfs.DeleteCommitRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_DeleteCommit = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.DeleteCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pfs.DeleteCommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.deleteCommit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/DeleteCommit',
      request,
      metadata || {},
      methodDescriptor_API_DeleteCommit,
      callback);
};


/**
 * @param {!proto.pfs.DeleteCommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.deleteCommit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/DeleteCommit',
      request,
      metadata || {},
      methodDescriptor_API_DeleteCommit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.FlushCommitRequest,
 *   !proto.pfs.CommitInfo>}
 */
const methodDescriptor_API_FlushCommit = new grpc.web.MethodDescriptor(
  '/pfs.API/FlushCommit',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.FlushCommitRequest,
  proto.pfs.CommitInfo,
  /**
   * @param {!proto.pfs.FlushCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.CommitInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.FlushCommitRequest,
 *   !proto.pfs.CommitInfo>}
 */
const methodInfo_API_FlushCommit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.CommitInfo,
  /**
   * @param {!proto.pfs.FlushCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.CommitInfo.deserializeBinary
);


/**
 * @param {!proto.pfs.FlushCommitRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.CommitInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.flushCommit =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/FlushCommit',
      request,
      metadata || {},
      methodDescriptor_API_FlushCommit);
};


/**
 * @param {!proto.pfs.FlushCommitRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.CommitInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIPromiseClient.prototype.flushCommit =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/FlushCommit',
      request,
      metadata || {},
      methodDescriptor_API_FlushCommit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.SubscribeCommitRequest,
 *   !proto.pfs.CommitInfo>}
 */
const methodDescriptor_API_SubscribeCommit = new grpc.web.MethodDescriptor(
  '/pfs.API/SubscribeCommit',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.SubscribeCommitRequest,
  proto.pfs.CommitInfo,
  /**
   * @param {!proto.pfs.SubscribeCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.CommitInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.SubscribeCommitRequest,
 *   !proto.pfs.CommitInfo>}
 */
const methodInfo_API_SubscribeCommit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.CommitInfo,
  /**
   * @param {!proto.pfs.SubscribeCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.CommitInfo.deserializeBinary
);


/**
 * @param {!proto.pfs.SubscribeCommitRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.CommitInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.subscribeCommit =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/SubscribeCommit',
      request,
      metadata || {},
      methodDescriptor_API_SubscribeCommit);
};


/**
 * @param {!proto.pfs.SubscribeCommitRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.CommitInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIPromiseClient.prototype.subscribeCommit =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/SubscribeCommit',
      request,
      metadata || {},
      methodDescriptor_API_SubscribeCommit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.BuildCommitRequest,
 *   !proto.pfs.Commit>}
 */
const methodDescriptor_API_BuildCommit = new grpc.web.MethodDescriptor(
  '/pfs.API/BuildCommit',
  grpc.web.MethodType.UNARY,
  proto.pfs.BuildCommitRequest,
  proto.pfs.Commit,
  /**
   * @param {!proto.pfs.BuildCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.Commit.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.BuildCommitRequest,
 *   !proto.pfs.Commit>}
 */
const methodInfo_API_BuildCommit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.Commit,
  /**
   * @param {!proto.pfs.BuildCommitRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.Commit.deserializeBinary
);


/**
 * @param {!proto.pfs.BuildCommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.Commit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.Commit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.buildCommit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/BuildCommit',
      request,
      metadata || {},
      methodDescriptor_API_BuildCommit,
      callback);
};


/**
 * @param {!proto.pfs.BuildCommitRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.Commit>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.buildCommit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/BuildCommit',
      request,
      metadata || {},
      methodDescriptor_API_BuildCommit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.CreateBranchRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_CreateBranch = new grpc.web.MethodDescriptor(
  '/pfs.API/CreateBranch',
  grpc.web.MethodType.UNARY,
  proto.pfs.CreateBranchRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.CreateBranchRequest} request
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
 *   !proto.pfs.CreateBranchRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_CreateBranch = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.CreateBranchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pfs.CreateBranchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.createBranch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/CreateBranch',
      request,
      metadata || {},
      methodDescriptor_API_CreateBranch,
      callback);
};


/**
 * @param {!proto.pfs.CreateBranchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.createBranch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/CreateBranch',
      request,
      metadata || {},
      methodDescriptor_API_CreateBranch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.InspectBranchRequest,
 *   !proto.pfs.BranchInfo>}
 */
const methodDescriptor_API_InspectBranch = new grpc.web.MethodDescriptor(
  '/pfs.API/InspectBranch',
  grpc.web.MethodType.UNARY,
  proto.pfs.InspectBranchRequest,
  proto.pfs.BranchInfo,
  /**
   * @param {!proto.pfs.InspectBranchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.BranchInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.InspectBranchRequest,
 *   !proto.pfs.BranchInfo>}
 */
const methodInfo_API_InspectBranch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.BranchInfo,
  /**
   * @param {!proto.pfs.InspectBranchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.BranchInfo.deserializeBinary
);


/**
 * @param {!proto.pfs.InspectBranchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.BranchInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.BranchInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.inspectBranch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/InspectBranch',
      request,
      metadata || {},
      methodDescriptor_API_InspectBranch,
      callback);
};


/**
 * @param {!proto.pfs.InspectBranchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.BranchInfo>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.inspectBranch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/InspectBranch',
      request,
      metadata || {},
      methodDescriptor_API_InspectBranch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.ListBranchRequest,
 *   !proto.pfs.BranchInfos>}
 */
const methodDescriptor_API_ListBranch = new grpc.web.MethodDescriptor(
  '/pfs.API/ListBranch',
  grpc.web.MethodType.UNARY,
  proto.pfs.ListBranchRequest,
  proto.pfs.BranchInfos,
  /**
   * @param {!proto.pfs.ListBranchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.BranchInfos.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.ListBranchRequest,
 *   !proto.pfs.BranchInfos>}
 */
const methodInfo_API_ListBranch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.BranchInfos,
  /**
   * @param {!proto.pfs.ListBranchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.BranchInfos.deserializeBinary
);


/**
 * @param {!proto.pfs.ListBranchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.BranchInfos)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.BranchInfos>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.listBranch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/ListBranch',
      request,
      metadata || {},
      methodDescriptor_API_ListBranch,
      callback);
};


/**
 * @param {!proto.pfs.ListBranchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.BranchInfos>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.listBranch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/ListBranch',
      request,
      metadata || {},
      methodDescriptor_API_ListBranch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.DeleteBranchRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_DeleteBranch = new grpc.web.MethodDescriptor(
  '/pfs.API/DeleteBranch',
  grpc.web.MethodType.UNARY,
  proto.pfs.DeleteBranchRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.DeleteBranchRequest} request
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
 *   !proto.pfs.DeleteBranchRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_DeleteBranch = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.DeleteBranchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pfs.DeleteBranchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.deleteBranch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/DeleteBranch',
      request,
      metadata || {},
      methodDescriptor_API_DeleteBranch,
      callback);
};


/**
 * @param {!proto.pfs.DeleteBranchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.deleteBranch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/DeleteBranch',
      request,
      metadata || {},
      methodDescriptor_API_DeleteBranch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.CopyFileRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_CopyFile = new grpc.web.MethodDescriptor(
  '/pfs.API/CopyFile',
  grpc.web.MethodType.UNARY,
  proto.pfs.CopyFileRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.CopyFileRequest} request
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
 *   !proto.pfs.CopyFileRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_CopyFile = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.CopyFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pfs.CopyFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.copyFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/CopyFile',
      request,
      metadata || {},
      methodDescriptor_API_CopyFile,
      callback);
};


/**
 * @param {!proto.pfs.CopyFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.copyFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/CopyFile',
      request,
      metadata || {},
      methodDescriptor_API_CopyFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.GetFileRequest,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodDescriptor_API_GetFile = new grpc.web.MethodDescriptor(
  '/pfs.API/GetFile',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.GetFileRequest,
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.pfs.GetFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.GetFileRequest,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodInfo_API_GetFile = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.pfs.GetFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @param {!proto.pfs.GetFileRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BytesValue>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.getFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/GetFile',
      request,
      metadata || {},
      methodDescriptor_API_GetFile);
};


/**
 * @param {!proto.pfs.GetFileRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BytesValue>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIPromiseClient.prototype.getFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/GetFile',
      request,
      metadata || {},
      methodDescriptor_API_GetFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.InspectFileRequest,
 *   !proto.pfs.FileInfo>}
 */
const methodDescriptor_API_InspectFile = new grpc.web.MethodDescriptor(
  '/pfs.API/InspectFile',
  grpc.web.MethodType.UNARY,
  proto.pfs.InspectFileRequest,
  proto.pfs.FileInfo,
  /**
   * @param {!proto.pfs.InspectFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FileInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.InspectFileRequest,
 *   !proto.pfs.FileInfo>}
 */
const methodInfo_API_InspectFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.FileInfo,
  /**
   * @param {!proto.pfs.InspectFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FileInfo.deserializeBinary
);


/**
 * @param {!proto.pfs.InspectFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.FileInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.FileInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.inspectFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/InspectFile',
      request,
      metadata || {},
      methodDescriptor_API_InspectFile,
      callback);
};


/**
 * @param {!proto.pfs.InspectFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.FileInfo>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.inspectFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/InspectFile',
      request,
      metadata || {},
      methodDescriptor_API_InspectFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.ListFileRequest,
 *   !proto.pfs.FileInfos>}
 */
const methodDescriptor_API_ListFile = new grpc.web.MethodDescriptor(
  '/pfs.API/ListFile',
  grpc.web.MethodType.UNARY,
  proto.pfs.ListFileRequest,
  proto.pfs.FileInfos,
  /**
   * @param {!proto.pfs.ListFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FileInfos.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.ListFileRequest,
 *   !proto.pfs.FileInfos>}
 */
const methodInfo_API_ListFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.FileInfos,
  /**
   * @param {!proto.pfs.ListFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FileInfos.deserializeBinary
);


/**
 * @param {!proto.pfs.ListFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.FileInfos)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.FileInfos>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.listFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/ListFile',
      request,
      metadata || {},
      methodDescriptor_API_ListFile,
      callback);
};


/**
 * @param {!proto.pfs.ListFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.FileInfos>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.listFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/ListFile',
      request,
      metadata || {},
      methodDescriptor_API_ListFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.ListFileRequest,
 *   !proto.pfs.FileInfo>}
 */
const methodDescriptor_API_ListFileStream = new grpc.web.MethodDescriptor(
  '/pfs.API/ListFileStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.ListFileRequest,
  proto.pfs.FileInfo,
  /**
   * @param {!proto.pfs.ListFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FileInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.ListFileRequest,
 *   !proto.pfs.FileInfo>}
 */
const methodInfo_API_ListFileStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.FileInfo,
  /**
   * @param {!proto.pfs.ListFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FileInfo.deserializeBinary
);


/**
 * @param {!proto.pfs.ListFileRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.FileInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.listFileStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/ListFileStream',
      request,
      metadata || {},
      methodDescriptor_API_ListFileStream);
};


/**
 * @param {!proto.pfs.ListFileRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.FileInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIPromiseClient.prototype.listFileStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/ListFileStream',
      request,
      metadata || {},
      methodDescriptor_API_ListFileStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.WalkFileRequest,
 *   !proto.pfs.FileInfo>}
 */
const methodDescriptor_API_WalkFile = new grpc.web.MethodDescriptor(
  '/pfs.API/WalkFile',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.WalkFileRequest,
  proto.pfs.FileInfo,
  /**
   * @param {!proto.pfs.WalkFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FileInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.WalkFileRequest,
 *   !proto.pfs.FileInfo>}
 */
const methodInfo_API_WalkFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.FileInfo,
  /**
   * @param {!proto.pfs.WalkFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FileInfo.deserializeBinary
);


/**
 * @param {!proto.pfs.WalkFileRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.FileInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.walkFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/WalkFile',
      request,
      metadata || {},
      methodDescriptor_API_WalkFile);
};


/**
 * @param {!proto.pfs.WalkFileRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.FileInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIPromiseClient.prototype.walkFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/WalkFile',
      request,
      metadata || {},
      methodDescriptor_API_WalkFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.GlobFileRequest,
 *   !proto.pfs.FileInfos>}
 */
const methodDescriptor_API_GlobFile = new grpc.web.MethodDescriptor(
  '/pfs.API/GlobFile',
  grpc.web.MethodType.UNARY,
  proto.pfs.GlobFileRequest,
  proto.pfs.FileInfos,
  /**
   * @param {!proto.pfs.GlobFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FileInfos.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.GlobFileRequest,
 *   !proto.pfs.FileInfos>}
 */
const methodInfo_API_GlobFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.FileInfos,
  /**
   * @param {!proto.pfs.GlobFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FileInfos.deserializeBinary
);


/**
 * @param {!proto.pfs.GlobFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.FileInfos)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.FileInfos>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.globFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/GlobFile',
      request,
      metadata || {},
      methodDescriptor_API_GlobFile,
      callback);
};


/**
 * @param {!proto.pfs.GlobFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.FileInfos>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.globFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/GlobFile',
      request,
      metadata || {},
      methodDescriptor_API_GlobFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.GlobFileRequest,
 *   !proto.pfs.FileInfo>}
 */
const methodDescriptor_API_GlobFileStream = new grpc.web.MethodDescriptor(
  '/pfs.API/GlobFileStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.GlobFileRequest,
  proto.pfs.FileInfo,
  /**
   * @param {!proto.pfs.GlobFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FileInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.GlobFileRequest,
 *   !proto.pfs.FileInfo>}
 */
const methodInfo_API_GlobFileStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.FileInfo,
  /**
   * @param {!proto.pfs.GlobFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FileInfo.deserializeBinary
);


/**
 * @param {!proto.pfs.GlobFileRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.FileInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.globFileStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/GlobFileStream',
      request,
      metadata || {},
      methodDescriptor_API_GlobFileStream);
};


/**
 * @param {!proto.pfs.GlobFileRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.FileInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIPromiseClient.prototype.globFileStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/GlobFileStream',
      request,
      metadata || {},
      methodDescriptor_API_GlobFileStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.DiffFileRequest,
 *   !proto.pfs.DiffFileResponse>}
 */
const methodDescriptor_API_DiffFile = new grpc.web.MethodDescriptor(
  '/pfs.API/DiffFile',
  grpc.web.MethodType.UNARY,
  proto.pfs.DiffFileRequest,
  proto.pfs.DiffFileResponse,
  /**
   * @param {!proto.pfs.DiffFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.DiffFileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.DiffFileRequest,
 *   !proto.pfs.DiffFileResponse>}
 */
const methodInfo_API_DiffFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.DiffFileResponse,
  /**
   * @param {!proto.pfs.DiffFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.DiffFileResponse.deserializeBinary
);


/**
 * @param {!proto.pfs.DiffFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.DiffFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.DiffFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.diffFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/DiffFile',
      request,
      metadata || {},
      methodDescriptor_API_DiffFile,
      callback);
};


/**
 * @param {!proto.pfs.DiffFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.DiffFileResponse>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.diffFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/DiffFile',
      request,
      metadata || {},
      methodDescriptor_API_DiffFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.DeleteFileRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_DeleteFile = new grpc.web.MethodDescriptor(
  '/pfs.API/DeleteFile',
  grpc.web.MethodType.UNARY,
  proto.pfs.DeleteFileRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.DeleteFileRequest} request
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
 *   !proto.pfs.DeleteFileRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_API_DeleteFile = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.DeleteFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pfs.DeleteFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.deleteFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/DeleteFile',
      request,
      metadata || {},
      methodDescriptor_API_DeleteFile,
      callback);
};


/**
 * @param {!proto.pfs.DeleteFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pfs.APIPromiseClient.prototype.deleteFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/DeleteFile',
      request,
      metadata || {},
      methodDescriptor_API_DeleteFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_API_DeleteAll = new grpc.web.MethodDescriptor(
  '/pfs.API/DeleteAll',
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
proto.pfs.APIClient.prototype.deleteAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.API/DeleteAll',
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
proto.pfs.APIPromiseClient.prototype.deleteAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.API/DeleteAll',
      request,
      metadata || {},
      methodDescriptor_API_DeleteAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.FsckRequest,
 *   !proto.pfs.FsckResponse>}
 */
const methodDescriptor_API_Fsck = new grpc.web.MethodDescriptor(
  '/pfs.API/Fsck',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.FsckRequest,
  proto.pfs.FsckResponse,
  /**
   * @param {!proto.pfs.FsckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FsckResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.FsckRequest,
 *   !proto.pfs.FsckResponse>}
 */
const methodInfo_API_Fsck = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.FsckResponse,
  /**
   * @param {!proto.pfs.FsckRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.FsckResponse.deserializeBinary
);


/**
 * @param {!proto.pfs.FsckRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.FsckResponse>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIClient.prototype.fsck =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/Fsck',
      request,
      metadata || {},
      methodDescriptor_API_Fsck);
};


/**
 * @param {!proto.pfs.FsckRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.FsckResponse>}
 *     The XHR Node Readable Stream
 */
proto.pfs.APIPromiseClient.prototype.fsck =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.API/Fsck',
      request,
      metadata || {},
      methodDescriptor_API_Fsck);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pfs.ObjectAPIClient =
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
proto.pfs.ObjectAPIPromiseClient =
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
 *   !proto.pfs.CreateObjectRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ObjectAPI_CreateObject = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/CreateObject',
  grpc.web.MethodType.UNARY,
  proto.pfs.CreateObjectRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.CreateObjectRequest} request
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
 *   !proto.pfs.CreateObjectRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ObjectAPI_CreateObject = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.CreateObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pfs.CreateObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.createObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.ObjectAPI/CreateObject',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_CreateObject,
      callback);
};


/**
 * @param {!proto.pfs.CreateObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pfs.ObjectAPIPromiseClient.prototype.createObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.ObjectAPI/CreateObject',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_CreateObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.Object,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodDescriptor_ObjectAPI_GetObject = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/GetObject',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.Object,
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.pfs.Object} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.Object,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodInfo_ObjectAPI_GetObject = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.pfs.Object} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @param {!proto.pfs.Object} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BytesValue>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.getObject =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/GetObject',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_GetObject);
};


/**
 * @param {!proto.pfs.Object} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BytesValue>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIPromiseClient.prototype.getObject =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/GetObject',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_GetObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.GetObjectsRequest,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodDescriptor_ObjectAPI_GetObjects = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/GetObjects',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.GetObjectsRequest,
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.pfs.GetObjectsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.GetObjectsRequest,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodInfo_ObjectAPI_GetObjects = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.pfs.GetObjectsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @param {!proto.pfs.GetObjectsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BytesValue>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.getObjects =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/GetObjects',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_GetObjects);
};


/**
 * @param {!proto.pfs.GetObjectsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BytesValue>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIPromiseClient.prototype.getObjects =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/GetObjects',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_GetObjects);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.GetBlockRequest,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodDescriptor_ObjectAPI_GetBlock = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/GetBlock',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.GetBlockRequest,
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.pfs.GetBlockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.GetBlockRequest,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodInfo_ObjectAPI_GetBlock = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.pfs.GetBlockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @param {!proto.pfs.GetBlockRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BytesValue>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.getBlock =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/GetBlock',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_GetBlock);
};


/**
 * @param {!proto.pfs.GetBlockRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BytesValue>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIPromiseClient.prototype.getBlock =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/GetBlock',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_GetBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.GetBlocksRequest,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodDescriptor_ObjectAPI_GetBlocks = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/GetBlocks',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.GetBlocksRequest,
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.pfs.GetBlocksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.GetBlocksRequest,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodInfo_ObjectAPI_GetBlocks = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.pfs.GetBlocksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @param {!proto.pfs.GetBlocksRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BytesValue>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.getBlocks =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/GetBlocks',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_GetBlocks);
};


/**
 * @param {!proto.pfs.GetBlocksRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BytesValue>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIPromiseClient.prototype.getBlocks =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/GetBlocks',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_GetBlocks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.ListBlockRequest,
 *   !proto.pfs.Block>}
 */
const methodDescriptor_ObjectAPI_ListBlock = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/ListBlock',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.ListBlockRequest,
  proto.pfs.Block,
  /**
   * @param {!proto.pfs.ListBlockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.Block.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.ListBlockRequest,
 *   !proto.pfs.Block>}
 */
const methodInfo_ObjectAPI_ListBlock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.Block,
  /**
   * @param {!proto.pfs.ListBlockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.Block.deserializeBinary
);


/**
 * @param {!proto.pfs.ListBlockRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.Block>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.listBlock =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/ListBlock',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_ListBlock);
};


/**
 * @param {!proto.pfs.ListBlockRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.Block>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIPromiseClient.prototype.listBlock =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/ListBlock',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_ListBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.TagObjectRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ObjectAPI_TagObject = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/TagObject',
  grpc.web.MethodType.UNARY,
  proto.pfs.TagObjectRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.TagObjectRequest} request
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
 *   !proto.pfs.TagObjectRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ObjectAPI_TagObject = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pfs.TagObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pfs.TagObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.tagObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.ObjectAPI/TagObject',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_TagObject,
      callback);
};


/**
 * @param {!proto.pfs.TagObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pfs.ObjectAPIPromiseClient.prototype.tagObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.ObjectAPI/TagObject',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_TagObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.Object,
 *   !proto.pfs.ObjectInfo>}
 */
const methodDescriptor_ObjectAPI_InspectObject = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/InspectObject',
  grpc.web.MethodType.UNARY,
  proto.pfs.Object,
  proto.pfs.ObjectInfo,
  /**
   * @param {!proto.pfs.Object} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.ObjectInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.Object,
 *   !proto.pfs.ObjectInfo>}
 */
const methodInfo_ObjectAPI_InspectObject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.ObjectInfo,
  /**
   * @param {!proto.pfs.Object} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.ObjectInfo.deserializeBinary
);


/**
 * @param {!proto.pfs.Object} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.ObjectInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.ObjectInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.inspectObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.ObjectAPI/InspectObject',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_InspectObject,
      callback);
};


/**
 * @param {!proto.pfs.Object} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.ObjectInfo>}
 *     A native promise that resolves to the response
 */
proto.pfs.ObjectAPIPromiseClient.prototype.inspectObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.ObjectAPI/InspectObject',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_InspectObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.CheckObjectRequest,
 *   !proto.pfs.CheckObjectResponse>}
 */
const methodDescriptor_ObjectAPI_CheckObject = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/CheckObject',
  grpc.web.MethodType.UNARY,
  proto.pfs.CheckObjectRequest,
  proto.pfs.CheckObjectResponse,
  /**
   * @param {!proto.pfs.CheckObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.CheckObjectResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.CheckObjectRequest,
 *   !proto.pfs.CheckObjectResponse>}
 */
const methodInfo_ObjectAPI_CheckObject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.CheckObjectResponse,
  /**
   * @param {!proto.pfs.CheckObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.CheckObjectResponse.deserializeBinary
);


/**
 * @param {!proto.pfs.CheckObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.CheckObjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.CheckObjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.checkObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.ObjectAPI/CheckObject',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_CheckObject,
      callback);
};


/**
 * @param {!proto.pfs.CheckObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.CheckObjectResponse>}
 *     A native promise that resolves to the response
 */
proto.pfs.ObjectAPIPromiseClient.prototype.checkObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.ObjectAPI/CheckObject',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_CheckObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.ListObjectsRequest,
 *   !proto.pfs.ObjectInfo>}
 */
const methodDescriptor_ObjectAPI_ListObjects = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/ListObjects',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.ListObjectsRequest,
  proto.pfs.ObjectInfo,
  /**
   * @param {!proto.pfs.ListObjectsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.ObjectInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.ListObjectsRequest,
 *   !proto.pfs.ObjectInfo>}
 */
const methodInfo_ObjectAPI_ListObjects = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.ObjectInfo,
  /**
   * @param {!proto.pfs.ListObjectsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.ObjectInfo.deserializeBinary
);


/**
 * @param {!proto.pfs.ListObjectsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.ObjectInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.listObjects =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/ListObjects',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_ListObjects);
};


/**
 * @param {!proto.pfs.ListObjectsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.ObjectInfo>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIPromiseClient.prototype.listObjects =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/ListObjects',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_ListObjects);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.DeleteObjectsRequest,
 *   !proto.pfs.DeleteObjectsResponse>}
 */
const methodDescriptor_ObjectAPI_DeleteObjects = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/DeleteObjects',
  grpc.web.MethodType.UNARY,
  proto.pfs.DeleteObjectsRequest,
  proto.pfs.DeleteObjectsResponse,
  /**
   * @param {!proto.pfs.DeleteObjectsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.DeleteObjectsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.DeleteObjectsRequest,
 *   !proto.pfs.DeleteObjectsResponse>}
 */
const methodInfo_ObjectAPI_DeleteObjects = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.DeleteObjectsResponse,
  /**
   * @param {!proto.pfs.DeleteObjectsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.DeleteObjectsResponse.deserializeBinary
);


/**
 * @param {!proto.pfs.DeleteObjectsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.DeleteObjectsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.DeleteObjectsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.deleteObjects =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.ObjectAPI/DeleteObjects',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_DeleteObjects,
      callback);
};


/**
 * @param {!proto.pfs.DeleteObjectsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.DeleteObjectsResponse>}
 *     A native promise that resolves to the response
 */
proto.pfs.ObjectAPIPromiseClient.prototype.deleteObjects =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.ObjectAPI/DeleteObjects',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_DeleteObjects);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.Tag,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodDescriptor_ObjectAPI_GetTag = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/GetTag',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.Tag,
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.pfs.Tag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.Tag,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodInfo_ObjectAPI_GetTag = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.pfs.Tag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @param {!proto.pfs.Tag} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BytesValue>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.getTag =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/GetTag',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_GetTag);
};


/**
 * @param {!proto.pfs.Tag} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BytesValue>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIPromiseClient.prototype.getTag =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/GetTag',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_GetTag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.Tag,
 *   !proto.pfs.ObjectInfo>}
 */
const methodDescriptor_ObjectAPI_InspectTag = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/InspectTag',
  grpc.web.MethodType.UNARY,
  proto.pfs.Tag,
  proto.pfs.ObjectInfo,
  /**
   * @param {!proto.pfs.Tag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.ObjectInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.Tag,
 *   !proto.pfs.ObjectInfo>}
 */
const methodInfo_ObjectAPI_InspectTag = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.ObjectInfo,
  /**
   * @param {!proto.pfs.Tag} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.ObjectInfo.deserializeBinary
);


/**
 * @param {!proto.pfs.Tag} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.ObjectInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.ObjectInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.inspectTag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.ObjectAPI/InspectTag',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_InspectTag,
      callback);
};


/**
 * @param {!proto.pfs.Tag} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.ObjectInfo>}
 *     A native promise that resolves to the response
 */
proto.pfs.ObjectAPIPromiseClient.prototype.inspectTag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.ObjectAPI/InspectTag',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_InspectTag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.ListTagsRequest,
 *   !proto.pfs.ListTagsResponse>}
 */
const methodDescriptor_ObjectAPI_ListTags = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/ListTags',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pfs.ListTagsRequest,
  proto.pfs.ListTagsResponse,
  /**
   * @param {!proto.pfs.ListTagsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.ListTagsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.ListTagsRequest,
 *   !proto.pfs.ListTagsResponse>}
 */
const methodInfo_ObjectAPI_ListTags = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.ListTagsResponse,
  /**
   * @param {!proto.pfs.ListTagsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.ListTagsResponse.deserializeBinary
);


/**
 * @param {!proto.pfs.ListTagsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.ListTagsResponse>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.listTags =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/ListTags',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_ListTags);
};


/**
 * @param {!proto.pfs.ListTagsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.ListTagsResponse>}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIPromiseClient.prototype.listTags =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pfs.ObjectAPI/ListTags',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_ListTags);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pfs.DeleteTagsRequest,
 *   !proto.pfs.DeleteTagsResponse>}
 */
const methodDescriptor_ObjectAPI_DeleteTags = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/DeleteTags',
  grpc.web.MethodType.UNARY,
  proto.pfs.DeleteTagsRequest,
  proto.pfs.DeleteTagsResponse,
  /**
   * @param {!proto.pfs.DeleteTagsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.DeleteTagsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pfs.DeleteTagsRequest,
 *   !proto.pfs.DeleteTagsResponse>}
 */
const methodInfo_ObjectAPI_DeleteTags = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pfs.DeleteTagsResponse,
  /**
   * @param {!proto.pfs.DeleteTagsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pfs.DeleteTagsResponse.deserializeBinary
);


/**
 * @param {!proto.pfs.DeleteTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pfs.DeleteTagsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pfs.DeleteTagsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pfs.ObjectAPIClient.prototype.deleteTags =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.ObjectAPI/DeleteTags',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_DeleteTags,
      callback);
};


/**
 * @param {!proto.pfs.DeleteTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pfs.DeleteTagsResponse>}
 *     A native promise that resolves to the response
 */
proto.pfs.ObjectAPIPromiseClient.prototype.deleteTags =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.ObjectAPI/DeleteTags',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_DeleteTags);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ObjectAPI_Compact = new grpc.web.MethodDescriptor(
  '/pfs.ObjectAPI/Compact',
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
const methodInfo_ObjectAPI_Compact = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.pfs.ObjectAPIClient.prototype.compact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pfs.ObjectAPI/Compact',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_Compact,
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
proto.pfs.ObjectAPIPromiseClient.prototype.compact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pfs.ObjectAPI/Compact',
      request,
      metadata || {},
      methodDescriptor_ObjectAPI_Compact);
};


module.exports = proto.pfs;

