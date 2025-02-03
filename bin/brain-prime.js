#!/usr/bin/env node
import { primeGame, description } from '../games/prime.js';
import { logic } from '../src/index.js';

logic(description, primeGame);
