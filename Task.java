package com.google.sps.data;

/** An item on a todo list. */
public final class Task {

  private final String firstname;
  private final String lastname;
  private final String email;
  private final String comments;

  public Task(String firstname, String lastname, String email, String comments) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.comments = comments;
  }
}
