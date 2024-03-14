# Examples and basic concepts

> [!WARNING]
> Draft version, likely full of errors and omissions.

It is convenient to start with a rather general definition of our object of study.

::: definition dynamical system
Let $M$ be a monoid (associative binary operation $+$, identity $0$) and let $X$ be a non-empty set.
We say that $T : M \times X \to X$ is a **dynamical system** if

- $T(t + t', x) = T(t, T(t',x))$ for all $t,t' \in M, x\in X$;
- $T(0,x) = x$ for all $x \in X$.

:::

We will often refer to $X$ as the **state space** and, in practice, the set will have substantially more

We will consider the cases where $M \in \{\mathbb{N}, \mathbb{Z}, \mathbb{R}_{\geq 0}, \mathbb{R}\}$ and we talk about this as the **time** in the system.
(Here and subsequently we use the convention that $\mathbb{N} = \{0,1,2,\ldots\}$ and ignore debates about what is "natural".)
The first two options correspond to **discrete time** systems and the last two options corresponds to **continuous time** systems.
The second and forth options correspond to invertible systems.
At the moment we will focus on discrete time systems but, when applicable, our definitions and theorems will be as general as possible.
As such we are working with a transformation $T : X \to X$ for some non-empty set $X$ and we consider the iterates.
So, in order to fit with the above abstract framework, we are considering the transformation,

$$
\mathbb{N} \times X \to X; \quad (n,x) \mapsto T^n x.
$$

<!-- In full generality we consider the following as a dynamical system, the focus of our interest.

::: definition dynamical system
Given a monoid G and an algebra A the action of G on A is a map f : G × A → A such that

1. f(gh, a) = f (g, f(h, a)) for each g, h ∈ G and a ∈ A;
2. f(e, a) = a for every a ∈ A, where e is the identity element of G;
3. f(g, a + b) = f(g, a) + f(g, b) for each g ∈ G and a, b ∈ A;
4. f(g, ab) = f(g, a) f(g, b) for each g ∈ G and a, b ∈ A.

::: -->

In this part of the course we will consider a few of the basic and canonical examples of dynamical systems.
Whilst looking at these examples we will introduce and start to work with some of the key notions that we will use.
Whenever possible we will introduce the most general definition of any notion whilst still focussing on tangible examples.

## Circle rotations

For our purpose we consider the circle $S^1 = \{z \in \mathbb{C} : \left| z \right| =1 \}$ (equivalently we could work with $\mathbb{R} / \mathbb{Z}$ with minor changes to the statements.)

::: definition circle rotation
For any $\alpha \in \mathbb{R}$ we define the **circle rotation**

$$
R_\alpha : S^1 \to S^1, \quad z \mapsto e^{2\pi i \alpha} z.
$$

:::

We are interested in considering the iterates and so we observe that $R_\alpha^n z = e^{2\pi i \alpha n} z$.

::: definition orbit
Given a dynamical system $T : M \times X \to X$ the **orbit** of $x \in X$ is the set

$$
\mathcal{O}(x) = \{T(t,x) : t \in M\}
$$

:::

For the circle rotations we are considering, the orbit of the point $z \in S^1$ is the set

$$
\mathcal{O}(z) = \{R_\alpha^n z : n\in \mathbb{N}\}.
$$

In the case of the circle rotation we observe that the transformation $R_\alpha$ is invertible so we could consider the orbit $\{R_\alpha^n z : n\in \mathbb{Z}\}$.
Subsequently there will be occasion to distinguish invertible and non-invertible systems but for the moment this isn't relevant.
If we need to be clear about the choice of meaning of orbit in any given occurrence we can describe them as the **forward orbit** or **full orbit**.

::: exercise
Let $R_\alpha : S^1 \to S^1$.
Draw an orbit of $R_\alpha$ in the case that $\alpha = 2/7$ and the case that $\alpha = 5/8$.
:::

We will introduce some notions in order to classify the different behaviour we can see in the orbits of different points and different systems.

::: definition periodic
Let $T : M \times X \to X$ be a dynamical system, $x \in X$ and $t \in M$, $t \neq 0$.
We say that $x$ is **periodic of period** $t$ if $T(t,x) = x$.
We say that $x$ is **periodic point** if there exists some such $t\neq 0$.
:::

We refer to the orbit of a periodic point as a **periodic orbit**.

::: definition fixed point
Let $T : M \times X \to X$ be a dynamical system, $x \in X$.
If $T(0,x) = x$ we say that $x$ is a **fixed point**.
:::

::: definition eventually periodic
Let $T : M \times X \to X$ be a dynamical system, $x \in X$, $t\in M$.
If $T(t,x)$ is periodic then we say that $x$ is **eventually periodic**.
:::

::: definition minimal period
Let $T : M \times X \to X$ be a dynamical system, $x \in X$ and $M \in \{\mathbb{N}, \mathbb{Z}, \mathbb{R}_{\geq 0}, \mathbb{R}\}$.
Suppose further that $x \in X$ is a periodic point but not a fixed point.
The minimal positive $t$ such that $x$ is a periodic point of period $t$ is called the **period** of $x$.
:::

::: exercise
Let $R_\alpha : S^1 \to S^1$ where $\alpha = p/q$ with $p,q$ coprime.

- Prove that $q$ is the minimal period.
- What is the dynamical meaning of $p$?

:::

::: details Hints
The absolute value of $p$ is the **winding number**, the number of times an orbit wraps around the circle before closing up.
:::

In the present setting of circle rotations the behaviour of the system depends heavily on whether $\alpha$ is irrational or not.

::: exercise
Let $R_\alpha : S^1 \to S^1$ and suppose that $\alpha$ is irrational.
Show that for every point $x\in S^1$ the forward orbit $\mathcal{O}(x)$ is dense in $S^1$.
:::

::: details Sketch of proof

1. Each orbit consist of infinitely many distinct points: this can be argued by contradiction.
2. For $\epsilon > 0$ choose $N \in \mathbb{N}$ such that $1/N < \epsilon$. Consider the points $\{R_\alpha^n : 0 \leq n \leq N\}$ and observe that there must be two distinct points of this set which are closer than a distance of $\epsilon$. These two points are $e^{2\pi i m}$, $e^{2\pi i m'}$ for some integers $m < m'$.
3. Consider $R_\alpha^{m'-m}$. This is a rotation of a positive angle less than $\epsilon$ and so the orbit of this set is at least $\epsilon$-close to any point in the circle.

:::

::: exercise
Prove that, for any finite sequence of decimal digits, there exists a natural number $n$ such that the decimal representation of $2^n$ starts with that sequence of digits.
:::

::: details Sketch of proof
First we rephrase the problem into a more manageable form.
It suffices to show that for any $A \in \mathbb{N}$ there exists $m,n \in \mathbb{N}$ such that

$$
A \times 10^m \leq 2^n < (A + 1) \times 10^m.
$$

Taking the $\log$ this reduces to showing the existence of $m,n$ such that

$$
\log_{10} A + m \leq n \log_{10} 2 < \log_{10} (A + 1)+ m
$$

and this can be rephrased in terms of the circle rotation $R_\alpha$ where $\alpha = \log_{10} 2$ is irrational.

:::

As we progress and study more systems it will be important to have a notion of when a system is really the same as another and when not.
For this we introduce the notion of conjugacy.

::: definition conjugacy
Let $T : M \times X \to X$ and $T' : M \times X' \to X'$ be two dynamical systems.
A **semiconjugacy** from $T$ to $T'$ is a surjective map $\pi : X' \to X$ which satisfies
$T(t,\pi x) = \pi T'(t,x)$ for all $x\in X'$, $t \in M$.
An invertible semiconjugacy is called a **conjugacy**.
:::

::: exercise
Prove that, for any $k\in \mathbb{Z}$, there is a continuous semiconjugacy from $R_\alpha$ to $R_{k\alpha}$.
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
