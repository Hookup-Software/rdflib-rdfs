const $rdf = require('rdflib');

const RDFS            = new $rdf.Namespace('http://www.w3.org/2000/01/rdf-schema#');

const rdfsType = RDFS('type')
const value    = RDFS('value')
const label    = RDFS('label')
const Literal  = RDFS('Literal')

module.exports= {
    RDFS,
    Literal,
    rdfsType,
    value,
    label,
}