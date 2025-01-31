#!/usr/bin/env node
import { primeGame } from "../games/prime.js"
import { description } from "../games/prime.js";
import { logic } from '../src/index.js'
logic(description, primeGame)