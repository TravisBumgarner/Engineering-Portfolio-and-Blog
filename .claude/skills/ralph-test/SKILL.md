---
name: ralph-test
description: Use this skill when writing tests, especially when working in TDD style to define tests before the actual functions are complete. This is the "Red" phase of TDD.
---

Your goal is to write tests for the currently scoped task. You should be able to do this autonomously with no input from the user. If you need more information, look at the SCOPES.yml or DESIGN.yml files for the project.

## Tasks That Don't Require Tests

Before writing any tests, evaluate whether the task has testable behavior at all.

**Skip tests entirely for:**
- TypeScript type definitions (interfaces, type aliases, enums) — the compiler validates these
- Type-only files (e.g., `webhookTypes.ts`, `*Types.ts`)
- Re-export files that simply forward exports from other modules
- Configuration objects or constants with no logic
- Simple pass-through functions that just delegate to another function

If the task only involves items from this list, skip directly to the ralph-code skill with the same arguments. Otherwise, proceed below.

---

## What Makes a Test Worth Writing

The purpose of a test is to protect important behavior from accidentally breaking. Before writing any test, ask:

> "If this test fails, what real bug would it catch?"

If you can't articulate a concrete bug that would affect users or system correctness, don't write the test.

### Test These

- **Business logic and calculations** — math, validation rules, pricing, permissions
- **State transitions** — what happens when status changes from A to B
- **Conditional behavior** — different inputs produce different outputs
- **Error handling that affects users** — what happens when things go wrong
- **Data transformations** — input shape → output shape
- **Integration boundaries** — calls to APIs, databases, external services

### Don't Test These

- **UI text, labels, or copy** — this changes constantly and isn't logic
- **Styling, CSS classes, or visual presentation** — not behavioral
- **The mere existence of elements** — unless conditional rendering is the feature
- **Third-party library internals** — trust them to test their own code
- **Implementation details** — private functions, internal data structures, the order operations happen in (unless order is the contract)
- **Getters/setters with no side effects**

### UI Component Heuristic

For components, modals, and UI elements, ask: "Does this test behavior or appearance?"

| Skip | Keep |
|------|------|
| `expect(modal.text).toBe("Are you sure?")` | `expect(onConfirm).toHaveBeenCalled()` after click |
| `expect(button).toHaveClass("primary")` | `expect(submitButton).toBeDisabled()` when form invalid |
| `expect(title).toBe("Settings")` | `expect(errorMessage).toBeVisible()` after failed submit |

---

## Workflow

### 1. Create stubs

In the code being tested, create stubs for any missing functions. These should:
- Have hardcoded or empty return values
- Cause no side effects
- Be importable by the tests

This gives tests something to import and call, with the expectation that tests will initially fail.

### 2. Write tests

**Structure:**
- Organize by behaviors using nested `describe` blocks where it aids readability
- Keep each test focused on one behavior — aim for 1-2 assertions, rarely more than 3
- Name tests as behaviors: "returns error when input is empty" not "test validateInput"

**Quantity guideline:**
Most functions need 1-3 tests. If you've written 5+ tests for a single function, step back — you're likely testing implementation details. Identify the 2-3 behaviors that actually matter.

**Mocking:**
- Use real implementations when practical
- Mock at integration boundaries (network, database, filesystem)
- Don't mock the thing you're testing
- If a test requires elaborate mocking to work, that's a signal the code may need refactoring, not more mocks

**Edge cases:**
Test reasonable edge cases (empty input, null values, boundary conditions) but don't enumerate every possible invalid input. One or two representative error cases is usually enough.

### 3. Audit ruthlessly — look for tests to delete

For each test you've written, ask:

1. **If I deleted this test, what bug could ship?** If you can't name a concrete bug, delete it.
2. **Does this test the contract (what) or implementation (how)?** Delete implementation tests.
3. **Would a product manager care if this broke?** If not, probably delete it.
4. **Is this test just confirming its own mocks?** A test that mocks a function to return X, calls the code, and asserts X was returned tests nothing. Delete it.
5. **Is this redundant with another test?** Keep the clearer one.

Be aggressive here. Fewer, meaningful tests are better than comprehensive tests that don't catch real bugs.

### 4. Update status

Update the current task in SCOPES.yml to status: "testing"

### 5. Commit

**IMPORTANT**: Never commit directly to main or master. All work must be done on a feature branch.

Commit all changes including the status update to VCS.

### 6. Continue

Call the ralph-code skill with the same arguments that were passed to this skill.1