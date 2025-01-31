#!/usr/bin/env node
import { gcdGame } from "../games/gcd.js";
import { description } from "../games/gcd.js";
import { logic } from '../src/index.js'
logic(description, gcdGame)