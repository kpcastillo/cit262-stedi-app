import sayHello from "../utils/hello.mjs";
import assert from 'assert';

it ("Hello World", ()=>{

    const hello = sayHello();

    assert.equal(hello,'hello');

});