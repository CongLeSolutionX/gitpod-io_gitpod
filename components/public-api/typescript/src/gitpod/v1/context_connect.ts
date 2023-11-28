/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

// @generated by protoc-gen-connect-es v1.1.2 with parameter "target=ts"
// @generated from file gitpod/v1/context.proto (package gitpod.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ParseContextRequest, ParseContextResponse } from "./context_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service gitpod.v1.ContextService
 */
export const ContextService = {
  typeName: "gitpod.v1.ContextService",
  methods: {
    /**
     * ParseContext parses the url and returns the context
     *
     * @generated from rpc gitpod.v1.ContextService.ParseContext
     */
    parseContext: {
      name: "ParseContext",
      I: ParseContextRequest,
      O: ParseContextResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;