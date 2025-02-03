#!/usr/bin/env node
import { calcGame, description } from '../games/calc.js';
import logic from '../src/index.js';

logic(description, calcGame);
