#!/usr/bin/env node
import { gcdGame, description } from '../games/gcd.js';
import { logic } from '../src/index.js';

logic(description, gcdGame);
