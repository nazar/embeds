import test from './tape-wrapper';

import fixtures from './fixtures';
import {render, parse as _parse} from '../lib';
import {string} from 'deku';
import queryDom from 'query-dom';

const parse = process.browser
  ? (str) => {
    const node = document.createElement('div');
    node.innerHTML = str;
    return _parse(node.childNodes);
  }
  : str => _parse(queryDom(str));

const parseAndRender = input =>
  string.render(render(parse(input)));

test('parse() + render() facebook - post', t => {
  const input = fixtures.facebookPost;
  const expected = input;
  const actual = parseAndRender(input);
  t.is(actual, expected);
});

test('parse() + render() facebook - video', t => {
  const input = fixtures.facebookVideo;
  const expected = input;
  const actual = parseAndRender(input);
  t.is(actual, expected);
});

test('parse() + render() twitter - video', t => {
  const input = fixtures.tweetVideo;
  const expected = input;
  const actual = parseAndRender(input);
  t.is(actual, expected);
});

test('parse() + render() instagram - with caption', t => {
  const input = fixtures.instagramCaption;
  const expected = input;
  const actual = parseAndRender(input);
  t.is(actual, expected);
});

test('parse() + render() instagram - without caption', t => {
  const input = fixtures.instagramWithoutCaption;
  const expected = input;
  const actual = parseAndRender(input);
  t.is(actual, expected);
});
