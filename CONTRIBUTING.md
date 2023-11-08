# Contribution Guidelines

First of all, thank you for taking an interest in contributing to the Tensei Engine project! We welcome your input and appreciate your help in making it a better tool for game and application development.
Notice that this repository is used mostly as a template for other repositories and also where you can find the organization's profile. For this reason, it's mostly for internal usage by maintainers
and therefore unlikely for you to want to do contributions to it. However, if you find the organization's profile misleading or you think you can help us by adding stuff to the template, we welcome you to collaborate with us on this repository.

Before continuing though, please refer to our [Code of Conduct](./CODE_OF_CONDUCT.md) to learn more about our values and expectations for contributors.

## Table of Contents

- [Contribution Guidelines](#contribution-guidelines)
  - [Table of Contents](#table-of-contents)
  - [How Can I Contribute?](#how-can-i-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Features or Enhancements](#suggesting-features-or-enhancements)
    - [Other suggestions](#other-suggestions)
    - [Pull Requests](#pull-requests)
  - [Code Style](#code-style)
  - [License](#license)

## How Can I Contribute?

You can contribute to the Tensei Engine project and particularly to this repository in a few ways. In general, you will want to either [start a discussion](https://github.com/tensei-engine/.github/discussions), [open an issue](https://github.com/tensei-engine/.github/issues) or [make a pull request](https://github.com/tensei-engine/.github/pulls) on the respective [GitHub repository](https://github.com/tensei-engine/.github) and follow the instructions there.

The preferred method of contribution is to start a discussion so that both the maintainers and the community are made aware of your suggestion and/or improvement and so that both can assess if it makes sense to promote the discussion into an issue worth tracking. It should be noted that even if the discussion is promoted to an issue, it may never end up being worked on, as the need for the proposed changes may vary over time.

The details for the various ways of contributing are as described below:

### Reporting Bugs

If you discover a bug or unexpected behavior, please [post a question on our community](https://github.com/tensei-engine/.github/discussions/new?category=q-a), [start a general discussion](https://github.com/tensei-engine/.github/discussions/new?category=general) or [report the bug as an isuse](https://github.com/tensei-engine/.github/issues/new?template=bug_report.yml) and follow the instructions there.
Please be as descriptive as possible, including steps to reproduce the issue and any relevant details.

### Suggesting Features or Enhancements

We welcome your ideas for new features or improvements to existing ones. To suggest a feature, [share your idea with the community](https://github.com/tensei-engine/.github/discussions/new?category=idea) or [request a feature as an issue](https://github.com/tensei-engine/.github/issues/new?template=feature_request.yml) and follow the instructions there. Please be as descriptive as possible. You may even include implementation proposals!

### Other suggestions

If you instead want to suggest improvements to documentation, deployment pipelines and build processes, or report other issues or suggestions, please [start a general discussion](https://github.com/tensei-engine/.github/discussions/new?category=general) or [create a task for us](https://github.com/tensei-engine/.github/issues/new?template=create_task.yml) and follow the instructions there. Please be as descriptive as possible and select the appropriate labels.

### Pull Requests

We also encourage direct contributions that improve the Tensei Engine project through pull requests. To submit your changes, follow these steps:

1. Fork the project.
2. Create a branch for your feature, bug fix or other changes.
3. Implement your changes and ensure they adhere to our code style and conventions.
4. Write tests to validate your changes (if applicable).
5. Submit a pull request (PR) to our [GitHub repository](https://github.com/tensei-engine/.github).

Your PR will be reviewed by project maintainers. If necessary, we may request further changes before merging.

## Code Style

Please adhere to our coding style and conventions. This is made very simple through a two part process, both of which rely on [prettier](https://prettier.io/) to ensure code adheres to our style and conventions. On top of this, we also heavily encourage the usage of [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). Although not mandatory, even less so for this repository, maintainers may at times request changes to commit messages when deemed necessary as some of our other automation tools rely on them to work properly.

The first part of this process, is the automation of formatting of files and where we encourage the usage of [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) through a set of tools that work when committing changes. On top of [prettier](https://prettier.io/), this tools are:

- [commitlint](https://commitlint.js.org/#/) - verifies if the commit message follows the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [husky](https://typicode.github.io/husky/) - creates hooks for the other tools to run when commiting
- [lint-staged](https://github.com/lint-staged/lint-staged) - helper tool for running [prettier](https://prettier.io/) when commiting

To use this tools simply run `npm clean-install` (or simply `npm install`, although the former is preferred), and together, this set of tools will automatically format all the committed files and enforce usage of [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). If you wish to do this process manually or you don't wanna follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), ignore this step.

As for the second part of this process, we do a status checks that once again uses [prettier](https://prettier.io/) to ensure code adheres to our style and conventions. This is done through a [GitHub action](https://docs.github.com/en/actions) which you can find [here](./.github/workflows/validate.yml).

## License

By contributing to the Tensei Engine project, you agree that your contributions will be licensed under the project's [MIT License](https://github.com/tensei-engine/.github/blob/main/LICENSE).

We appreciate your help in improving the Tensei Engine project and making it a welcoming and productive environment for all contributors.

Thank you for your contributions!
