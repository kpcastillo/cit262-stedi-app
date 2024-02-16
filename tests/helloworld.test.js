import assert from 'assert';
import helloKaren from "../utils/helloworld.mjs";

it ("Sould say Hello Karen", ()=>{

    const helloString = helloKaren();

    console.log(helloKaren);

   expect(helloKaren).toBe("Hello Karen")

});