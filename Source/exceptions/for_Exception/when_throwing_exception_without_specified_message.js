/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Exception} from '../Exception';

class MyException extends Exception
{
}

describe('when throwing exception without message parameters', () => {
    let result = null;

    try { MyException.throw(); } catch(e) { result = e }

    it('should be of the specific exception type', () => result.should.be.instanceof(MyException));
    it('should have an empty message', () => result.message.should.equal(''));
});