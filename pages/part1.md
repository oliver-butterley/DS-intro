# Examples and basic concepts

::: warning Draft version
Likely full of errors and omissions.
Everyone is welcome to contribute corrections and improvements.
:::

In this part of the course we consider some of the classic dynamical systems and explore a few of the main notions of dynamics.
Further details can be found in many standard reference texts.[^1]

[^1]: Further details related to these topics can be found in many reference texts, for instance _Introduction to Dynamical Systems_ by Michael Brin, Garrett Stuck, sections 1.1, 1.2, 1.3, 1.4, 1.6, 1.7.

It is convenient to start with a rather general definition of our object of study.

::: definition dynamical system
Let $M$ be a monoid (associative binary operation $+$, identity $0$) and let $X$ be a non-empty set.
We say that $T : M \times X \to X$ is a **dynamical system** if

- $T(t + t', x) = T(t, T(t',x))$ for all $t,t' \in M, x\in X$;
- $T(0,x) = x$ for all $x \in X$.

:::

We will often refer to $X$ as the **state space** or **phase space** and, in practice, the set will have substantially more structure than we write at this stage.
Typically it will be some manifold or subset of such.

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
If, for all $t\in M$, $T(t,x) = x$ we say that $x$ is a **fixed point**.
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
As we have seen, if $\alpha = p/q$ then $R_\alpha^n = \mathrm{id}$ and so every orbit is periodic.

::: exercise
Let $R_\alpha : S^1 \to S^1$ and suppose that $\alpha$ is irrational.
Show that for every point $x\in S^1$ the forward orbit $\mathcal{O}(x)$ is dense in $S^1$.
:::

::: details Sketch of proof

1. Each orbit consist of infinitely many distinct points: this can be argued by contradiction.
2. For $\epsilon > 0$ choose $N \in \mathbb{N}$ such that $1/N < \epsilon$.
   Consider the points $\{R_\alpha^n : 0 \leq n \leq N\}$.
   According to the [pigeonhole principle](https://en.wikipedia.org/wiki/Pigeonhole_principle) there must be two distinct points of this set which are closer than a distance of $\epsilon$.
   These two points are $e^{2\pi i m}$, $e^{2\pi i m'}$ for some integers $m < m'$.
3. Consider $R_\alpha^{m'-m}$.
   This is a rotation of a positive angle less than $\epsilon$ and so the orbit of this set is at least $\epsilon$-close to any point in the circle.

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

A general question for these systems and for others is when a system can be decomposed or when the system is not decomposable in some sense.
In this direction we here introduce the concept of **minimal**.
Later, with a similar point of view of studying the decomposability of systems, we introduce the concept of **ergodicity**.
Minimal systems are a generalization of periodic orbits, and they are the analogue in topological dynamics of ergodic measures.

::: definition invariant
Let $T : M \times X \to X$ be a dynamical system.
A set $Y \subseteq X$ is said to be $T-$**invariant** if $T(t,y) \in Y$ for all $t\in M$, $y\in Y$.
:::

In practice, in the discrete time case of $M = \mathbb{N}$ and $T : X \to X$, this is equivalent to $T Y \subseteq Y$.
Note that later, particularly when defining ergodicity, we will consider sets which satisfy $T^{-1} Y = Y$, a related but different notion.

::: definition minimal set
Let $T : M \times X \to X$ be a dynamical system.
A set $Y \subseteq X$ is said to be a **minimal set** if it is non-empty, closed and invariant and no proper subset satisfies these three properties.
:::

::: definition minimal
Let $T : M \times X \to X$ be a dynamical system.
We say that $T$ is **minimal** if $X$ is a minimal set.
:::

::: exercise
Show that irrational circle rotations are minimal.
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
For any $m \in \mathbb{N}$, $2 \leq m$ we define the **circle endomorphism**

$$
E_m : S^1 \to S^1, \quad z \mapsto z^m.
$$

:::

It is often convenient to view these transformations as $e^{2\pi i (x)} \mapsto e^{2\pi i (m x)}$ and so we can instead consider $x \mapsto m x \mod 1$ acting on the unit interval with end points identified.

Since $|m| > 1$ these transformations are expanding in the sense that the distance between nearby points is expanded by a factor of $m$.
To be precise, if $d(x,y) \leq \frac{1}{2m}$ then $d(E_m x, E_m y) = m d(x, y)$.
On the other hand, there exist pairs of points which are rather far one from the other yet the images of these points like close to each other.

::: exercise
Draw the graph of the transformation $[0,1) \to [0,1)$; $x \mapsto 2 x \mod 1$ and mark of this: (1) a pair of points which are separated; (2) a pair of points which are far from each other but which map close to each other; (3) a periodic point; (4) a fixed point.
:::

::: definition eventually periodic
Let $T : M \times X \to X$ be a dynamical system, $x \in X$, $t\in M$.
If $T(t,x)$ is periodic then we say that $x$ is **eventually periodic**.
:::

In a system which is not invertible it is possible for a point to be eventually periodic without being periodic.
For example, consider $E_2$ and the point $x = 1/6$ which has the orbit $\mathcal{O}(x) = \{1/6, 1/3, 2/3, 1/3, 2/3,\ldots\}$, i.e., this point is not periodic but it's image is periodic of period $2$.

::: definition invariant measure
We say that a measure $\mu$ is invariant under the dynamics $T : X \to X$ if, for every measurable set $A \subseteq X$, $\mu(T^{-1} A) = \mu(A)$.
:::

Equivalently, according to the [Riesz–Markov–Kakutani](https://en.wikipedia.org/wiki/Riesz%E2%80%93Markov%E2%80%93Kakutani_representation_theorem) representation theorem, a measure $\mu$ is invariant if for all compactly supported continuous $\varphi : X \to \mathbb{C}$, $\mu(\varphi \circ T) = \mu(\varphi)$.

Let $\mathrm{Leb}$ denote Lebesgue measure.

::: exercise
Prove that $\mathrm{Leb}(E_m^{-1}[a,b]) = \mathrm{Leb}([a,b])$ for any interval $[a,b]$.
This suffices to imply that Lebesgue measure is invariant for any Borel subset.
:::

Let $\delta_x$ denote the $\delta$-measure at point $x$ in the sense that, if $A$ is some set,

$$
\delta_x(A) = \begin{cases} 1 & \text{if $x \in A$}\\ 0 & \text{if $x \notin A$} \end{cases}
$$

::: exercise
Suppose that $x$ is a periodic point of period $n$.
Show that the probability measure defined as $\frac{1}{n} \sum_{k=0}^{n-1} \delta_{E_m^n x}$ is invariant.
:::

::: exercise
How many fixed points does $E_m$ have?
:::

Are there periodic points? Are there many periodic points? Are there dense orbits? Are there many dense orbits?
In order to investigate these questions it will be convenient to introduce **symbolic dynamics** and understand a conjugacy with expanding endomorphisms and so we postpone the questions to later.

::: exercise
Suppose that $x$ is a periodic point of period $n$.
Show that the probability measure defined as $\frac{1}{n} \sum_{k=0}^{n-1} \delta_{E_m^n x}$ is ergodic.
:::

## Affine expanding interval maps

Another class of system we can consider are the transformations $T : [0,1] \to [0,1]$ which are piecewise affine and with derivative strictly greater than $1$.

::: exercise
Let $T : [0,1] \to [0,1]$ be differentiable and invertible.
Prove that,

- If $T'$ is positive then $T$ has only fixed points and no periodic points;
- If $T'$ is negative then $T$ has a unique fixed point and all other periodic points have period two.

:::

::: definition expanding but not really
Let $T : [0,1] \to [0,1]$ be defined as the transformation such that, for each $n \in \mathbb{N}$, $T$ is affine with derivative equal to $2$ on $[2^{-(n + 1)},2^{-n})$ and $T(2^{-(n + 1)}) = 0$.
:::

This system has the interesting property that all orbits converge to $0$ whilst the derivative is equal to $2$ everywhere.

## Symbolic dynamics and shift maps

Here we introduce another class of dynamical systems which we refer to as symbolic dynamics.

::: definition one-sided shift
Let $m \in \mathbb{N}$, $2 \leq m$ and define $\Sigma_m = \{0,\ldots,m-1\}^{\mathbb{N}}$.
Let

$$
\sigma : \Sigma_m \to \Sigma_m; \quad (x_0, x_1, x_2,\ldots) \mapsto (x_1, x_2,\ldots).
$$

:::

We refer to $\Sigma_m$ as the set of sequences and to $\sigma$ as the shift map.
Observe that $\sigma$ in not invertible.
We call this the one-sided shift since we could also consider the case of $\{0,\ldots,m-1\}^{\mathbb{Z}}$ and then the shift is invertible.

::: definition conjugacy of shift map and expanding circle endomorphism
Let

$$
\phi_m : \Sigma_m \to [0,1]; \quad (x_k)_{k\in\mathbb{N}} \mapsto \sum_{k\in \mathbb{N}} x_k m^{-(k + 1)}
$$

:::

::: exercise
Prove that $\phi_m$ is surjective, that it is one-to-one except for a countable set of sequences and that it is a semiconjugacy.
:::

We can take advantage of the symbolic dynamics in order to prove properties of expanding circle endomorphisms.
Possibly many of these properties could be proved in other ways but the aim here is to develop a dynamical style proof which is therefore applicable to more systems, particular those which are less regular.

::: exercise
Show that the periodic points of $E_m$ are dense.
:::

::: details Sketch of proof
Let $\epsilon > 0$, $x\in S^1$. We will find a periodic point $y \in S^1$ which is $\epsilon$-close to $x$.

- Let $a = (a_0,a_1,\ldots) \in \Sigma_m$ such that $\phi_m a = x$;
- Choose $n\in\mathbb{N}$ such that $m^{-n} < \epsilon$;
- Let $b \in \Sigma_m$ be defined by taking the first $n$ symbols of $a$ and then repeating them;
- Observe that $\phi_m b$ is a periodic point;
- Calculate that $y = \phi_m b$ is $\epsilon$-close to $x$ because the first $n$ symbols in the sequence agree.

:::

::: exercise
Show that the set of points of $E_m$ with dense orbits is uncountable.
:::

::: exercise
Show that the set of points with dense orbits under $E_m$ has full Lebesgue measure.
:::

### Dynamical partitions for expanding circle endomorphisms

...

## Lebesgue measure is an ergodic measure for expanding circle endomorphisms

Up until this point we have considered the topological dynamics, the action of the dynamics on points, the behaviour of individual orbits, we looked at period orbits, dense orbits, etc.
We have already seen that in many situations the picture of orbits is incredibly complex.
With ergodic theory we study the behaviour of the system on a set of full measure.
Ergodic theory is the study of statistical properties of dynamical systems relative to a measure on the underlying space.

In a later part of the course we will return to ergodic theory in detail, for the moment we consider a few of the aspect related to the systems we introduced.

In the following, recall the expanding circle endomorphism $E_m : [0,1) \to [0,1)$.

::: definition ergodic
Suppose that $(X, \mathcal{F})$ is a measurable space and $\mu$ is an invariant probability measure for $T : X \to X$.
We say that $\mu$ is an ergodic measure for $T$ if, for any $A \in \mathcal{B}$ such that $T^{-1} A = A$, $\mu(A) \in \{0,1\}$.
:::

::: exercise
Suppose that $x$ is a periodic point of period $n$.
Show that the probability measure defined as $\frac{1}{n} \sum_{k=0}^{n-1} \delta_{E_m^n x}$ is ergodic.
:::

::: theorem
Lebesgue measure is an ergodic measure for the expanding circle endomorphism $E_m$.
:::

::: info Proof

For brevity we use the notation $|A|$ to denote the Lebesgue measure of a set $A$.

1. Let $A \subseteq [0,1)$ satisfy $E_m^{-1}A = A$, $|A| > 0$. It suffices to prove that $|A| = 1$.
2. According to [Lebesgue's density theorem](https://en.wikipedia.org/wiki/Lebesgue's_density_theorem), since $|A| > 0$, for any $\epsilon > 0$ there exists a ball $B$ such that $|B \cap A| > 1 - \epsilon$.
3. There exists $n$ large such that the elements of $\mathcal{P}$ are small and so there exists $\omega \in \mathcal{P}$ such that $\omega \subseteq B$.
4. Consequently $|\omega \cap A^c| \leq \epsilon |\omega|$.
5. We take advantage of the fact that $E_m : \omega \to [0,1)$ is an affine bijection and so

   $$
    \frac{|E_m^n(\omega \cap A^c)|}{|E_m^n \omega|} = \frac{|\omega \cap A^c|}{|\omega|} \leq \epsilon.
   $$

6. We assumed that $E_m^{-1}A = A$ and so $E_m^{-1}A^c = A^c$ and so $E_m^{-n}A^c = A^c$.
   Consequently $E_m^n(\omega \cap A^c) = E_m^n(\omega \cap E_m^{-n}A^c) = [0,1) \cap A^c = A^c$.
7. This means that

   $$
    \frac{|A^c|}{|[0,1)|} = \frac{|E_m^n(\omega \cap A^c)|}{|E_m^n \omega|} \leq \epsilon.
   $$

   Since $\epsilon > 0$ was arbitrary, we have proven that $|A^c| = 0$ and so $|A| = 1$.

:::

## The Gauss transformation

For any $x\in\mathbb{R}$ let $\lfloor x \rfloor$ denote the greatest integer less than or equal to $x$.

::: definition Gauss transformation
Let

$$
\varphi : [0,1] \to [0,1];
\quad x \mapsto
\begin{cases}
1/x - \lfloor 1/x \rfloor & \text{if} \quad x \neq 0 \\
0   & \text{if} \quad x = 0.
\end{cases}
$$

:::

::: exercise
Draw a graph of the Gauss transformation.
Where is it discontinuous?
:::

The Gauss transformation is connected to continued fractions.
With this idea is it possible to conjugate the Gauss transformation to a shift map.

::: exercise
What are the fixed points of the Gauss transformation?
:::

::: exercise
Show that $x \in [0,1]$ is rational if and only if $\varphi^m x = 0$ for some $n\in \mathbb{N}$.
:::

The Gauss measure is one with with density $1/(1+x)$.
The measure of an interval $[a,b]$ is

$$
\mu([a,b]) = \frac{1}{\log 2} \int_a^b \frac{1}{1+x} \ dx = \frac{1}{\log 2} \frac{1 + b}{1 + a}.
$$

This measure is $\varphi$-invariant in the sense that $\mu(\varphi^{-1} A) = \mu(A)$ for any measurable set $A$.

::: exercise
Show the invariance of the Gauss measure.
:::

## Hyperbolic toral automorphisms

## Attractors
