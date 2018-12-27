/// <reference path="../node_modules/mocha-typescript/globals.d.ts"/>
import { expect } from 'chai'

@suite('Look Ahead Regular Expression')
export class LookAheadRegularExpressionsUnitTest {

    @test "that the sentence contains the keyword func" () {
        const reg = /func/
        const text = "public func myMethod() {"
        const result = text.match(reg)
        expect(result).to.not.be.null
    }

    @test "that the method name is preceeded by a func keyword " () {
        const reg = /func(?=\s+([\w\d]+))/
        const text = "func myMethod"
        const result = text.match(reg)
        expect(result).to.not.be.null
        if(result !== null)
        expect(result[1]).to.equal('myMethod')
    }

    @test "that the method name is followed by open and close brackets" () {
        const reg = /func(?=\s+([\w\d]+)(?=\s*\(\)))/
        const text = "func myMethod()"
        const result = text.match(reg)
        expect(result).to.not.be.null
        if(result !== null)
        expect(result[1]).to.equal('myMethod')
    }

    @test "that the method names brackets are followed by an opening curly braket" () {
        const reg = /func(?=\s+([\w\d]+)(?=\s*\(\)(?=\s*{)))/
        const text = "func myMethod() {"
        const result = text.match(reg)
        expect(result).to.not.be.null
        if(result !== null)
        expect(result[1]).to.equal('myMethod')
    }

    @test "that the func keyword exists after access level" () {

        const reg = /(@IB[\w]+|)(?=\s*(public|private|internal|open|fileprivate|)(?=\s*(func(?=\s+([\w]+)))))/
        const text = "@IBOtherThing public func myMethodName(name)"
        const result = text.match(reg)
        expect(result).to.not.be.null
    }

    // @test "that a method name exists after func" () {

    //     const reg = /func(?=\s+[\w]+)/
    //     const text = "func myMethodName(name)"
    //     const result = text.match(reg)
    //     expect(result).to.not.be.null
    //     console.log(result)
    // }

   

}