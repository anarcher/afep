# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AFEP is a task management application implementing the Autofocus methodology - a productivity system for managing todo lists. It has been upgraded from Rails 3.0 to Rails 8.0 and modernized with Hotwire (Turbo + Stimulus) and Tailwind CSS.

## Core Architecture

The application centers around a unique task state machine with these key concepts:

### Task States and Workflow
- **Todo**: New tasks that haven't been started
- **Doing**: Tasks that have been started but not completed  
- **Done**: Tasks that were started and then completed
- **Canceled**: Tasks that were never started but marked as completed (canceled)

### Key Models
- `Task`: Core entity with state tracking (`started_at`, `completed_at`)
- `ActiveList`: Service for adding new tasks and closing lists
- `WorkingList`: View model that shows recent tasks (last 3 closed periods)
- `CompletedList`: Service for managing completed task validation
- `ClosedMark`: Represents when a list was "closed" - creates review periods

### List Management Pattern
The app uses a "closed list" concept where you periodically close your current task list to create review periods. The WorkingList shows tasks from the last 3 closed periods, creating a rolling window of recent work.

## Development Commands

### Running the Application
```bash
# Start Rails server
bundle exec rails server

# Development with Tailwind CSS watching (requires 2 terminals)
# Terminal 1:
bundle exec rails server
# Terminal 2: 
npx tailwindcss -i ./app/assets/stylesheets/application.tailwind.css -o ./app/assets/stylesheets/application.css --watch

# Alternative: Use foreman (if installed in Gemfile)
foreman start -f Procfile.dev
```

### Testing
```bash
# Run all specs
bundle exec rspec

# Run specs with rake
rake spec

# Watch mode (requires watchr gem)
watchr specs.watchr
```

### Database
```bash
# Run migrations
bundle exec rails db:migrate

# Console
bundle exec rails console
```

## Technology Stack

- **Rails 8.0** with modern conventions
- **Hotwire** (Turbo + Stimulus) for SPA-like interactions without JavaScript frameworks
- **Tailwind CSS** for utility-first styling
- **SQLite** database
- **RSpec** for testing
- **HAML** for view templates

## Frontend Architecture

### Stimulus Controllers
- `task-row`: Handles task row interactions and highlighting
- `form-reset`: Auto-resets forms after submission
- `keyboard-shortcuts`: Global keyboard shortcuts ('n' for new task focus)
- `turbo-stream-actions`: Custom Turbo Stream actions

### Tailwind CSS
- Custom component classes defined in `application.tailwind.css`
- Task state styling (doing, done, canceled classes)
- Responsive design with consistent spacing

## Key Patterns

### Turbo Stream Responses
All task actions (add, start, complete, cancel, close_list) support both HTML redirects and Turbo Stream updates for seamless UX.

### State Validation
Tasks enforce valid state transitions - you cannot complete a task that hasn't been started, cannot start a completed task, etc.

### Korean Localization
Error messages and some UI text are in Korean (see task_controller.rb line 52).

## File Structure Notes

- Views use HAML templates (.html.erb)
- Turbo Stream templates in `app/views/task/*.turbo_stream.erb`
- Custom CSS components in `app/assets/stylesheets/application.tailwind.css`
- Stimulus controllers in `app/javascript/controllers/`
- Tests follow RSpec conventions in `spec/` directory