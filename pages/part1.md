# Examples and basic concepts

> [!WARNING]
> Draft version, likely full of errors and omissions.

In full generality we consider the following as a dynamical system, the focus of our interest.

::: definition dynamical system
Given a monoid G and an algebra A the action of G on A is a map f : G × A → A such that

1. f(gh, a) = f (g, f(h, a)) for each g, h ∈ G and a ∈ A;
2. f(e, a) = a for every a ∈ A, where e is the identity element of G;
3. f(g, a + b) = f(g, a) + f(g, b) for each g ∈ G and a, b ∈ A;
4. f(g, ab) = f(g, a) f(g, b) for each g ∈ G and a, b ∈ A.

:::

In this part of the course we will consider a few of the basic and canonical examples of dynamical systems.
Whilst looking at these examples we will introduce and start to work with some of the key notions that we will use.

## Circle rotations

::: definition circle rotation
....
:::

::: exercise
Let $R_\alpha : S^1 \to S^1$.
Draw an orbit of $R_\alpha$ in the case that $\alpha = 2/7$ and the case that $\alpha = 5/8$.
:::

::: exercise
Let $R_\alpha : S^1 \to S^1$ where $\alpha = p/q$ with $p,q$ coprime.

- Prove that $q$ is the minimal period, i.e., for all $x\in S^1$, $R_\alpha^k(x) \neq x$ for each $1 \leq k < q$.
- What is the dynamical meaning of $p$?

:::

::: exercise
Let $R_\alpha : S^1 \to S^1$ and suppose that $\alpha$ is irrational.
Show that for every point $x\in S^1$ the forward orbit $\mathcal{O}(x)$ is dense in $S^1$.
:::

::: exercise
Prove that, for any $k\in \mathbb{Z}$, there is a continuous semiconjugacy from $R_\alpha$ to $R_{k\alpha}$.
:::

::: exercise
Prove that, for any finite sequence of decimal digits, there exists a natural number $n$ such that the decimal representation of $2^n$ starts with that sequence of digits.
:::

::: exercise
Show that the circle rotations $R_\alpha$ and $R_\beta$ are conjugate by a homeomorphism if and only if $\alpha = \pm \beta \mod 1$.
:::

## Expanding circle endomorphisms

::: definition expanding circle endomorphism
...
:::

## Interval maps

::: exercise

Let $I = [0,1]$ and let $T : X \to X$ be differentiable and invertible.
Prove that,

- If $T'$ is positive then $T$ has only fixed points and no periodic points;
- If $T'$ is negative then $T$ has a unique fixed point and all other periodic points have period two.

:::

## Shift maps

## The Gauss transformation

## Hyperbolic toral automorphisms

## Attractors
