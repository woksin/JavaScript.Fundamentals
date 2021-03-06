﻿/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {Specification} from '../Specification';
import {And} from '../And';

describe('when left hand is not satisfied and right hand is', () => {
    
    let leftHandSideEvaluator = sinon.stub().returns(false);
    let leftHandSide = new Specification(leftHandSideEvaluator);

    let rightHandSideEvaluator = sinon.stub().returns(true);
    let rightHandSide = new Specification(rightHandSideEvaluator);

    let instance = { something: 42 };
    let rule = new And(leftHandSide, rightHandSide);
    
    rule.evaluate(instance);

    it('should not be considered satisfied', () => rule.isSatisfied.should.be.false);
});