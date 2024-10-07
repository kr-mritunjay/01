const express = require("express"); // this not way to import in ts

import express from "express"; // this the correct way to import in ts

// to install express in ts we have write //  npm i @types/express ///

export const a = 1; // to import in other file we have to destructure the object like
// import { a } from './file.ts' // this is the correct way to import in ts

export default a; // to import the default export we dont have to destructured the object
// import a from './file.ts' // this is the correct way to import in ts
