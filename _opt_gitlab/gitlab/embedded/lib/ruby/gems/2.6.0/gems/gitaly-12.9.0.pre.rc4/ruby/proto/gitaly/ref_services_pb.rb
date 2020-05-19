# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: ref.proto for package 'gitaly'

require 'grpc'
require 'ref_pb'

module Gitaly
  module RefService
    class Service

      include GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'gitaly.RefService'

      rpc :FindDefaultBranchName, FindDefaultBranchNameRequest, FindDefaultBranchNameResponse
      rpc :FindAllBranchNames, FindAllBranchNamesRequest, stream(FindAllBranchNamesResponse)
      rpc :FindAllTagNames, FindAllTagNamesRequest, stream(FindAllTagNamesResponse)
      # Find a Ref matching the given constraints. Response may be empty.
      rpc :FindRefName, FindRefNameRequest, FindRefNameResponse
      # Return a stream so we can divide the response in chunks of branches
      rpc :FindLocalBranches, FindLocalBranchesRequest, stream(FindLocalBranchesResponse)
      rpc :FindAllBranches, FindAllBranchesRequest, stream(FindAllBranchesResponse)
      rpc :FindAllTags, FindAllTagsRequest, stream(FindAllTagsResponse)
      rpc :FindTag, FindTagRequest, FindTagResponse
      rpc :FindAllRemoteBranches, FindAllRemoteBranchesRequest, stream(FindAllRemoteBranchesResponse)
      rpc :RefExists, RefExistsRequest, RefExistsResponse
      rpc :FindBranch, FindBranchRequest, FindBranchResponse
      rpc :DeleteRefs, DeleteRefsRequest, DeleteRefsResponse
      rpc :ListBranchNamesContainingCommit, ListBranchNamesContainingCommitRequest, stream(ListBranchNamesContainingCommitResponse)
      rpc :ListTagNamesContainingCommit, ListTagNamesContainingCommitRequest, stream(ListTagNamesContainingCommitResponse)
      rpc :GetTagMessages, GetTagMessagesRequest, stream(GetTagMessagesResponse)
      # Returns commits that are only reachable from the ref passed
      rpc :ListNewCommits, ListNewCommitsRequest, stream(ListNewCommitsResponse)
      rpc :ListNewBlobs, ListNewBlobsRequest, stream(ListNewBlobsResponse)
      rpc :PackRefs, PackRefsRequest, PackRefsResponse
    end

    Stub = Service.rpc_stub_class
  end
end
