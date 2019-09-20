"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.description = "";
        this.url = " ";
        this.size = 1;
        this.forkCount = 1;
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.size;
        this.forkCount = repo.forks;
    }
    return Repo;
}());
exports.Repo = Repo;
