import "./page.css";
const page = () => {
  const codeString1 = `
    {
        "compilerOptions": {
          "target": "ES5",
          "experimentalDecorators": true
        }
    }`;
  const codeString2 = `function sealed(constructor : Function){
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }
    
    @sealed
    class Greeter{
        greeting : string;
        constructor(message : string){
            this.greeting = message;
        }
        greet(){
            return &quot;Hello, &quot; + this.greeting;
        }`;
  const codeString3 = `fucntion enumerable(value : boolean){
            return function (target : any , propertyKey : string , descriptor : PropertyDescriptor){
                descriptor.enumerable = value;
            };
        }
        class Greeter{
            greeting : string;
            constructor(message : string){
                this.greeting = message;
            }
            @enumerable(false)
            greet(){
                return &quot;Hello, &quot; + this.greeting;	
            }`;
  const codeString4 = `function formate(formatString : string){
                return function(target : any , propertyKey : string){
                    let value : string;
            
                    const getter = function() {
                        return value;
                    };
                    
                    const setter = function(newVal : string){
                        value = formatString.replace(&quot;%s&quot; , newVal);		
                    };
            
                    //replace the property with a new one with getter and setter
                    Object.defineProperty(target , propertyKey, {
                            get : getter,
                            set : setter , 
                            enumerable : true,
                            configurable : true
                        });
                };
            }
            
            class Greeter {
                @format(&quot;Hello , %s&quot;)
                greeting : string;
            
                constructor(message : string){
                    this.greeting = message;
                }
            `;
  return (
    <div className="w-[70%] mx-auto bg-black text-white">
      <article id="fe462506-2892-4a37-ba9b-43666595c652" className="page sans">
        <header>
          <h1 className="page-title">Decorators</h1>
          <p className="page-description"></p>
        </header>
        <div className="page-body">
          <p id="8f7f55a2-302f-4aaa-8ae4-feef21c0d24f" className="">
            They provide a way to add both annotations and a meta-programming
            syntax for class declarations and members. Decorators are a stage 2
            proposal for JavaScript and are available as an experimental feature
            of TypeScript.
          </p>
          <p id="5328391a-050e-4fbb-a483-8e97545886f0" className=""></p>
          <p id="b7c670fd-7d81-41e6-bf43-77a34aa973ba" className="">
            To enable experimental support for decorators , you must enable the{" "}
            <code>experimentalDecorators</code> compiler option either on the
            command line or in your <code>tsconfig.json</code> :{" "}
          </p>
          <p id="14e01df7-f518-4b61-b37d-e179bc0298ee" className=""></p>
          <pre id="0aeaabab-3da2-431d-842e-d006a5fa6725" className="code">
            <code className="language-TypeScript">{codeString1}</code>
          </pre>
          <p id="583cf030-b454-479f-b21e-9d3561af4a60" className=""></p>
          <h2 id="b1e0bdc8-7f81-46b8-a019-0c2f33c1a52c" className="">
            Class Decorators
          </h2>
          <p id="db00fbf1-3842-4362-ae2e-6276850ae0ee" className="">
            A class decorator is declared just before a class declaration and
            can be used to observe , modify or replace a class definition.
          </p>
          <p id="67d108b1-aea0-4267-92e1-993247aca289" className=""></p>
          <pre id="206f10bd-5f04-441e-b7fc-867343084ddb" className="code">
            <code className="language-TypeScript">{codeString2}</code>
          </pre>
          <p id="bc47037d-72a1-4345-8e55-b6d6370c2465" className="">
            In this example , the <code>@sealed</code> decorator will seal both
            the constructor and its prototype so that new properties can be
            added to it.
          </p>
          <p id="b6e7a019-926a-423a-bbf6-1708d518b200" className=""></p>
          <h2 id="adf6da5e-5889-4086-9112-633c90f9a208" className="">
            Method Decorators
          </h2>
          <p id="f01780cd-569f-42ee-8c50-8af9c7183b44" className="">
            A method decorator can be used to observe , modify or replace a
            method definition.
          </p>
          <p id="50ac3428-c385-48b4-b9e1-d3f8ffb7ec9b" className=""></p>
          <pre id="5d08c2e0-60cb-4050-84f1-249688be464e" className="code">
            <code className="language-TypeScript">{codeString3}</code>
          </pre>
          <p id="ef2f3071-01c6-4a60-bc1d-49d2fc2985de" className="">
            The <code>@enumerable(false)</code> decorator here is used to modify
            the <code>enumerable</code> property of <code>greet</code> method.
          </p>
          <p id="99802f23-8f45-4b22-9dd1-6f3f780353ca" className=""></p>
          <h2 id="cb04cbcf-4b28-4cee-a14a-8f97f1c26db8" className="">
            Property Decorators
          </h2>
          <p id="b4a7c34b-cd1e-4790-901d-022d3e9740fa" className="">
            They are used to observe and modify the definition of a property.
          </p>
          <p id="ece3481f-cddd-498d-a053-62b46808aea2" className=""></p>
          <pre id="8d332952-318e-4a67-9dfa-0b3251d0721c" className="code">
            <code className="language-TypeScript">{codeString4}</code>
          </pre>
          <p id="624e4a99-6fa6-44d3-ad3d-d51c3a328736" className="">
            The @format(&quot;Hello, %s&quot;) decorator will modify how the
            greeting property is set and retrieved.
          </p>
          <p id="f4811e82-9767-4f43-b251-5a945d60af8d" className=""></p>
          <h2 id="9209d6fe-ed8a-43c2-9497-93e9f01e4765" className="">
            Parameter Decorators
          </h2>
          <p id="77394111-5100-4011-ba0e-beadb3223448" className="">
            Parameter Decorators are declared just before a parameter
            declaration. The parameter decorator is applied to the function for
            a class constructor or method declaration.
          </p>
          <p id="573922ac-e452-41c1-a78d-460897b98233" className=""></p>
          <pre id="74b7f5a7-3d17-4adf-abf6-4bf93cf8e1ad" className="code">
            <code className="language-TypeScript">{codeString4}</code>
          </pre>
          <p id="e0ffcab3-7984-4ec7-8357-4aea6672a446" className="">
            The @required decorator here will log a message when the greet
            method&#x27;s name parameter is defined.
          </p>
          <p id="0aed01dc-0b19-42bb-aee7-a3f5523cc73a" className=""></p>
          <p id="c1db9758-101f-4e5f-b168-d29428403063" className="">
            Decorators are advanced feature, and their functionality can be
            complex because they can modify the runtime behaviour of the class ,
            method , accessor , property or parameter they are used on.
          </p>
          <p id="1c667a96-08a4-41e4-bdc9-655e4a1b263e" className="">
            Keep in mind -{" "}
          </p>
          <ul
            id="756d2c9b-aaa6-4bbe-a6ea-e12e11d5b7da"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              Decorators are executed at runtime , but their composition can be
              quite intricate , as they can be used to modify the shape of the
              class at definition time.
            </li>
          </ul>
          <ul
            id="d32a98a2-0635-42b9-b05e-a91a4b565026"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              Decorators are not fully standardised and might change as
              ECMAscript proposals evolve.
            </li>
          </ul>
        </div>
      </article>
      <span
        className="sans"
        style={{ fontSize: "14px", paddingTop: "2em" }}
      ></span>
    </div>
  );
};

export default page;
