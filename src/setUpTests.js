// import '@testing-library/jest-dom'; - importación de jest necesaria

/// Configuración de libreria Enzyme para Pruebas
import Enzyme from 'enzyme';
// El adaptador es temporal, en lo que ponen uno para React 17
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer({ mode: 'deep' }) )