import React from 'react'

type ErrorBoundaryProps = {
  children: React.ReactNode
  /** Compact fallback for decorative canvases; default is a page-style message. */
  compact?: boolean
}

type ErrorBoundaryState = {
  hasError: boolean
}

/**
 * Class boundary so a lazy-route or WebGL failure cannot unmount the whole shell.
 * Retry resets local state so the child tree can remount.
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  private handleRetry = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (!this.state.hasError) return this.props.children

    if (this.props.compact) {
      return null
    }

    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <p className="text-base font-semibold text-text-main">The page failed to load.</p>
        <p className="mt-2 text-sm text-text-muted">
          Something went wrong while loading this section. You can try again.
        </p>
        <button
          type="button"
          onClick={this.handleRetry}
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500"
        >
          Retry
        </button>
      </div>
    )
  }
}
