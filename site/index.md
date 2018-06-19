---
title: Serverless Questions
layout: layouts/base.njk
---

# What the heck is Serverless?

Chris Coyier of CSSTricks & David Wells are teaming up to break down this whole "serverless" thing people have been talking about.

Ask us your questions about serverless functions and lets get to the bottom of this...

<form name="serverless-questions" netlify-honeypot="full-name" action="/thanks" netlify>
  <p class="honey">
    <label>Your full name: <input name="full-name"></label>
    <input type="hidden" name="tab" id="tab" value="2">
  </p>
  <p>
    <label for="name">Name</label>
    <input type="text" name="name" id="name">
  </p>
  <p>
    <label for="email">Your email<small>(optional)</small></label>
    <input type="email" name="email" id="email">
  </p>
  <p>
    <label for="questions">What questions do you have about the serverless landscape?</label>
    <textarea name="questions" id="questions"></textarea>
  </p>
  <p>
    <button type="submit" class="button">Ask us anything!</button>
  </p>
</form>
