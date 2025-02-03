#!/usr/bin/env node
import { progressionGame, description } from '../games/progression.js';
import logic from '../src/index.js';

logic(description, progressionGame);
