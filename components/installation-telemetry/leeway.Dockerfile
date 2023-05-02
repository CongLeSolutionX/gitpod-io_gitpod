# Copyright (c) 2021 Gitpod GmbH. All rights reserved.
# Licensed under the GNU Affero General Public License (AGPL).
# See License.AGPL.txt in the project root for license information.

FROM cgr.dev/chainguard/wolfi-base:latest@sha256:f9d60d6615172e96dbdd39275ae8e77cb870a553ac77570cb27580d7a48d50b1
COPY components-installation-telemetry--app/installation-telemetry /app/installation-telemetry
ENTRYPOINT [ "/app/installation-telemetry" ]
CMD [ "help" ]
