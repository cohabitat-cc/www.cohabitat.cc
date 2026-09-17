{
  description = "COHABITAT.CC website development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.jekyll
          ];

          shellHook = ''
            echo "🌿 COHABITAT.CC dev environment actif"
            echo "   Pour lancer le serveur de prévisualisation : jekyll serve"
          '';
        };

        apps = {
          default = {
            type = "app";
            program = "${pkgs.writeShellScript "serve" ''
              exec ${pkgs.jekyll}/bin/jekyll serve --host 127.0.0.1 --port 4000
            ''}";
          };
          serve = self.apps.${system}.default;
        };
      }
    );
}
