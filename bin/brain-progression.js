#!/usr/bin/env node
import { progressionGame } from "../games/progression.js";
import { description } from "../games/progression.js";
import { logic } from '../src/index.js'
logic(description, progressionGame)