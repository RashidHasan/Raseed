using Expense_Tracker.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace Expense_Tracker.Controllers
{
    [Authorize]
    public class ChatController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ChatController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Index(int friendId)
        {
            // Pass the friend's user ID to the view
            ViewBag.FriendId = friendId;
            return View();
        }

        // New method to fetch notifications via GET request
        [HttpGet]
        public async Task<IActionResult> GetUnreadCount()
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);

            // Fetch the count of unread notifications for the current user
            var unreadCount = await _context.Notifications
                .Where(n => n.UserId == userId && !n.IsRead)
                .CountAsync();

            return Json(new { unreadCount });
        }

        [HttpGet]
        public IActionResult Notification()
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            var notifications = _context.Notifications
                .Where(n => n.UserId == userId)
                .OrderByDescending(n => n.Timestamp)
                .ToList();

            return View(notifications);
        }


        [HttpPost]
        public async Task<IActionResult> MarkAsRead(int notificationId)
        {
            var notification = await _context.Notifications.FindAsync(notificationId);
            if (notification == null || notification.UserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value))
                return BadRequest();

            notification.IsRead = true;
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
