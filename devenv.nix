{
  pkgs,
  lib,
  config,
  ...
}:
{
  languages.javascript = {
    enable = true;
    bun.enable = true;
  };

  processes = {
    dev.exec = "bun dev";
  };

  scripts.podman-build = {
    exec = "podman build -t app:latest .";
    description = "Build the podman image";
  };

  git-hooks.hooks = {
    prettier.enable = true;
    eslint.enable = true;
    nixfmt.enable = true;
  };

  packages = with pkgs; [
    prettier
    eslint
    nixfmt-rfc-style
  ];
}
