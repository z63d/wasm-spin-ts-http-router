FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

ARG TARGETOS
ARG TARGETARCH

ENV SPIN_VERSION 2.6.0
ENV BIOME_VERSION 1.8.3

RUN curl -fsSL https://developer.fermyon.com/downloads/install.sh | bash -s -- --version v${SPIN_VERSION} \
  && sudo mv ./spin /usr/local/bin/spin \
  && spin plugins update \
  && spin plugins install js2wasm --yes \
  && curl -L https://github.com/biomejs/biome/releases/download/cli%2Fv${BIOME_VERSION}/biome-linux-x64 -o biome \
  && chmod +x biome
