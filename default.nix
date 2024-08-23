{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-18_x
    pkgs.git
  ];

  shellHook = ''
    echo "Welcome to the development environment with Node.js 18.x!"
  '';
}
