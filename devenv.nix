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

  services.postgres = {
    enable = true;
    package = pkgs.postgresql_17;
    initialDatabases = [
      { name = "portfolio"; }
    ];
    initialScript = ''
      CREATE USER postgres WITH PASSWORD 'postgres';
      GRANT ALL PRIVILEGES ON DATABASE portfolio TO postgres;
    '';
  };

  env.DATABASE_URL = "postgresql://postgres:postgres@localhost:${toString config.services.postgres.port}/portfolio";

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
