/// <reference path="../node_modules/mocha-typescript/globals.d.ts"/>
import { expect } from 'chai'

@suite('Basic Regular Expression')
export class BasicRegularExpressionsUnitTest {

    @test "matching a name in a string" () {

        const reg = /david/
        const text = "my name is david thorn"
        const result: RegExpMatchArray | null = text.match(reg)
        expect(result).to.not.be.null
    }

    @test "Capturing the name which has been found" () {
        const reg = /(david)/
        const text = "my name is david thorn"
        const result: RegExpMatchArray | null = text.match(reg)
        expect(result).to.not.be.null
    }

    @test "matching that a phone number has from 11-15 digits" () {

        const phoneNumber = "00441320193943"

        const reg = /\d{11,15}/

        expect(phoneNumber.match(reg)).to.not.be.null
    }

}