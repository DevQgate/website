import tkinter as tk
from tkinter import messagebox, simpledialog

class TodoApp:
    def __init__(self, root):
        self.root = root
        self.root.title("To-Do App")
        self.root.geometry("500x500")
        self.root.configure(bg="#ffffff")

        self.tasks = []
        self.check_states = []

        # Header
        self.header = tk.Label(root, text="To-Do List", font=("Arial", 24, "bold"), bg="#ffffff", fg="#333333")
        self.header.pack(pady=20)

        # Frame for tasks with scrollbar
        self.task_frame = tk.Frame(root, bg="#ffffff")
        self.task_frame.pack(pady=10, fill="both", expand=True)

        self.canvas = tk.Canvas(self.task_frame, bg="#ffffff", highlightthickness=0)
        self.scrollbar = tk.Scrollbar(self.task_frame, orient="vertical", command=self.canvas.yview)
        self.scrollable_frame = tk.Frame(self.canvas, bg="#ffffff")

        self.scrollable_frame.bind(
            "<Configure>",
            lambda e: self.canvas.configure(scrollregion=self.canvas.bbox("all"))
        )

        self.canvas.create_window((0, 0), window=self.scrollable_frame, anchor="nw")
        self.canvas.configure(yscrollcommand=self.scrollbar.set)

        self.canvas.pack(side="left", fill="both", expand=True)
        self.scrollbar.pack(side="right", fill="y")

        # Buttons
        self.button_frame = tk.Frame(root, bg="#ffffff")
        self.button_frame.pack(pady=10)

        self.add_button = tk.Button(self.button_frame, text="Add Task", command=self.add_task, bg="#4CAF50", fg="white", font=("Arial", 14), relief="flat", padx=10, pady=5)
        self.add_button.grid(row=0, column=0, padx=10)

        self.delete_button = tk.Button(self.button_frame, text="Delete Selected Tasks", command=self.delete_task, bg="#f44336", fg="white", font=("Arial", 14), relief="flat", padx=10, pady=5)
        self.delete_button.grid(row=0, column=1, padx=10)

    def add_task(self):
        task = simpledialog.askstring("Add Task", "Enter the task:")
        if task:
            self.tasks.append(task)
            self.check_states.append(False)
            self.update_task_listbox()

    def edit_task(self, index):
        new_task = simpledialog.askstring("Edit Task", "Modify the task:", initialvalue=self.tasks[index])
        if new_task:
            self.tasks[index] = new_task
            self.update_task_listbox()

    def toggle_check(self, index, check_label):
        current_state = self.check_states[index]
        new_state = not current_state

        # Update the state
        self.check_states[index] = new_state

        # Simulate a simple animation by changing the color
        if new_state:
            check_label.config(bg="#4CAF50", text="✔")  # Checked state
        else:
            check_label.config(bg="#ffffff", text=" ")   # Unchecked state

    def delete_single_task(self, index):
        self.tasks.pop(index)
        self.check_states.pop(index)
        self.update_task_listbox()

    def delete_task(self):
        indexes_to_delete = [i for i, state in enumerate(self.check_states) if state]

        if not indexes_to_delete:
            messagebox.showwarning("Warning", "Please select at least one task to delete.")
            return

        for index in sorted(indexes_to_delete, reverse=True):
            self.tasks.pop(index)
            self.check_states.pop(index)

        self.update_task_listbox()
        messagebox.showinfo("Deleted Tasks", "Selected tasks deleted.")

    def update_task_listbox(self):
        # Clear current tasks
        for widget in self.scrollable_frame.winfo_children():
            widget.destroy()

        for i, task in enumerate(self.tasks):
            task_frame = tk.Frame(self.scrollable_frame, bg="#f0f0f0", bd=1, relief="flat")
            task_frame.pack(pady=5, padx=10, fill="x")

            # Create a canvas for rounded rectangle
            task_canvas = tk.Canvas(task_frame, width=480, height=50, bg="#f0f0f0", highlightthickness=0)
            task_canvas.pack()

            # Draw a rounded rectangle
            self.draw_rounded_rectangle(task_canvas, 10, 10, 470, 40, 20, outline="#cccccc", fill="#f0f0f0")

            # Custom animated checkbox (label acting as a checkbox)
            check_label = tk.Label(task_canvas, text=" ", width=2, height=1, bg="#ffffff", font=("Arial", 16), relief="solid", bd=1)
            check_label.place(x=10, y=10)
            check_label.bind("<Button-1>", lambda e, i=i, label=check_label: self.toggle_check(i, label))

            # Task text
            task_label = tk.Label(task_canvas, text=task, bg="#f0f0f0", font=("Arial", 12), anchor="w")
            task_label.place(x=50, y=10)

            # Edit button
            edit_button = tk.Button(task_canvas, text="Edit", command=lambda i=i: self.edit_task(i), bg="#2196F3", fg="white", font=("Arial", 10), padx=5, pady=2, relief="flat")
            edit_button.place(x=380, y=10)

            # Delete button
            delete_button = tk.Button(task_canvas, text="Delete", command=lambda i=i: self.delete_single_task(i), bg="#f44336", fg="white", font=("Arial", 10), padx=5, pady=2, relief="flat")
            delete_button.place(x=420, y=10)

    def draw_rounded_rectangle(self, canvas, x1, y1, x2, y2, radius, **kwargs):
        """ Draws a rounded rectangle. """
        canvas.create_arc(x1, y1, x1 + radius * 2, y1 + radius * 2, extent=90, start=180, **kwargs)  # Top left
        canvas.create_arc(x2 - radius * 2, y1, x2, y1 + radius * 2, extent=90, start=270, **kwargs)  # Top right
        canvas.create_arc(x1, y2 - radius * 2, x1 + radius * 2, y2, extent=90, start=90, **kwargs)  # Bottom left
        canvas.create_arc(x2 - radius * 2, y2 - radius * 2, x2, y2, extent=90, start=0, **kwargs)  # Bottom right
        canvas.create_polygon(
            x1 + radius, y1, x2 - radius, y1, x2, y1 + radius, x2, y2 - radius,
            x2 - radius, y2, x1 + radius, y2, x1, y2 - radius, x1, y1 + radius,
            smooth=True, **kwargs
        )

if __name__ == "__main__":
    root = tk.Tk()
    app = TodoApp(root)
    root.mainloop()
