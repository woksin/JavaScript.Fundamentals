﻿/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Specification } from '../Specification';
import { Or } from '../Or';

describe('when left hand is satisfied and right hand not', () => {
    
    let leftHandSideEvaluator = sinon.stub().returns(true);
    let leftHandSide = new Specification(leftHandSideEvaluator);

    let rightHandSideEvaluator = sinon.stub().returns(false);
    let rightHandSide = new Specification(rightHandSideEvaluator);

    let instance = { something: 42 };
    let rule = new Or(leftHandSide, rightHandSide);
    rule.evaluate(instance);

    it('should be considered satisfied', () => rule.isSatisfied.should.be.true);
});