using Microsoft.AspNetCore.Mvc;
using TodoApp.Models;

namespace TodoApp.Controllers;

public class TodoController : Controller
{
    // A static list of to-do items for simplicity
    private static readonly List<TodoItem> TodoItems = [];

    // Action to display the list of to-do items
    public IActionResult Index()
    {
        return View(TodoItems);
    }

    // Action to add a new item (GET - show form)
    public IActionResult Create()
    {
        return View();
    }

    // Action to add a new item (POST - add to the list)
    [HttpPost]
    public IActionResult Create(TodoItem newItem)
    {
        if (ModelState.IsValid)
        {
            newItem.Id = TodoItems.Count + 1;
            TodoItems.Add(newItem);
            return RedirectToAction("Index");
        }
        return View(newItem);
    }

    // Action to mark an item as completed
    [HttpPost]
    public IActionResult Complete(int id)
    {
        var item = TodoItems.FirstOrDefault(t => t.Id == id);
        if (item != null)
        {
            item.IsCompleted = true;
        }
        return RedirectToAction("Index");
    }

    // Action to delete a task
    [HttpPost]
    public IActionResult Delete(int id)
    {
        var item = TodoItems.FirstOrDefault(t => t.Id == id);
        if (item != null)
        {
            TodoItems.Remove(item);
        }
        return RedirectToAction("Index");
    }
}