import React from "react";

export default function NotFoundPage() {
  return (
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <h1 class="display-1">404</h1>
          <h2 class="mb-4">Page Not Found</h2>
          <p class="mb-4">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <a href="/" class="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
