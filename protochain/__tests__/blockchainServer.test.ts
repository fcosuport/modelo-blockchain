import { describe, test, expect, jest } from '@jest/globals';
import request from 'supertest';
import {app} from '../src/server/BlockchainServer.js';
import Block from '../src/lib/block.js';

jest.mock('../src/lib/block.js');
jest.mock('../src/lib/blockchain.js')

describe("BlockchainServer Tests", () => {
    
    test('GET /status - Should return status', async () => {
        const response = await request(app)
            .get('/status');

            expect(response.status).toEqual(200);
            expect(response.body.isValid.success).toEqual(true);
    })

    test('GET /blocks/:index -  Should get genesis', async () => {
        const response = await request(app)
            .get('/blocks/0');

            expect(response.status).toEqual(200);
            expect(response.body.index).toEqual(0);
    })

    test('GET /blocks/:index -  Should NOT get genesis', async () => {
        const response = await request(app)
            .get('/blocks/-1');

            expect(response.status).toEqual(404);
    })

})