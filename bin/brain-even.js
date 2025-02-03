#!/usr/bin/env node
import { evenGame } from '../games/even.js';
import { description } from '../games/even.js';
import { logic } from '../src/index.js';

logic(description, evenGame);
