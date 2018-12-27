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

    @test "that we can capture a repeated sequence of items" () {

        const reg = /([\w]*)\s*([\w]+)\s*:\s*([\w]+)/g
        const paramReg = new RegExp(reg.source)
        const text = "_ name: String, _ surname: String, person age: Int"
        
        const result = text.match(reg)
        expect(result).to.not.be.null
        if(result === null) return
        
        const params = result.map( item => { return item.match(paramReg) } )
        expect(params.length).to.equal(3)
        if(params.length !== 2) expect(params.length).to.not.equal(2)
        const name = params[0]
        const surname = params[1]
        const age = params[2]
        expect(name).to.be.not.undefined
        expect(name).to.be.not.null

        expect(surname).to.be.not.undefined
        expect(surname).to.be.not.null

        expect(age).to.be.not.undefined
        expect(age).to.be.not.null

        if(name ===  null) return
        expect(name[1]).to.equal('_')
        expect(name[2]).to.equal('name')
        expect(name[3]).to.equal('String')
        if(surname ===  null) return
        expect(surname[1]).to.equal('_')
        expect(surname[2]).to.equal('surname')
        expect(surname[3]).to.equal('String')
        if(age ===  null) return
        expect(age[1]).to.equal('person')
        expect(age[2]).to.equal('age')
        expect(age[3]).to.equal('Int')
    }

}