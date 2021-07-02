import React from 'react';

export function createProgrammer(name) {
  const programmer = { name }
  return {
    ...programmer,
    ...programmerRender(programmer),
    ...canCode(programmer)
  };
}

function programmerRender({name}){
    return {
        render: () => <h1>Создан программист {name}</h1>
    }
}

function canCode({ name }) {
  return {
    code: () => {
        console.log(name + " is coding...");
        return <p>{name}  is coding...</p>
    },
  };
}

export function createFrontend(name){
    const programmer = createProgrammer(name);
    return {
        ...programmer,
        ...frontendRender(programmer),
        ...canAngular(programmer)
    }
}

function frontendRender({name}){
    return {
        render: () => <h1>Создан фронтенд-программист {name}</h1>
    }
}

function canAngular({ name }) {
    return {
      angular: () => {
        console.log(name + " is creating Angular App...");
      },
    };
  }

export function createBackend(name){
    const programmer = createProgrammer(name);
    return {
        ...programmer,
        ...backendRender(programmer),
        ...canNodejs(programmer)
    }
}

function backendRender({name}){
    return {
        render: () => <h1>Создан бэкенд-программист {name}</h1>
    }
}

function canNodejs({ name }) {
    return {
      nodejs: () => {
        console.log(name + " is creating NodeJS App...");
      },
    };
}

export function createFullstack(name){
    const programmer = createProgrammer(name);
    return {
        ...programmer,
        ...fullstackRender(programmer),
        ...canNodejs(programmer),
        ...canAngular(programmer),
    }
}

function fullstackRender({name}){
    return {
        render: () => <h1>Создан фулстек-программист {name}</h1>
    }
}
