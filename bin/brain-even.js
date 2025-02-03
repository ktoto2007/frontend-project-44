#!/usr/bin/env node
import { evenGame, description } from '../games/even.js';
import { logic } from '../src/index.js';

logic(description, evenGame);
