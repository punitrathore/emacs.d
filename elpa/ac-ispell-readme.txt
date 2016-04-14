`ac-ispell.el' provides ispell/aspell completion source for auto-complete.
You can use English word completion with it.

To use this package, add following code to your init.el or .emacs

   ;; Completion words longer than 4 characters
   (custom-set-variables
     '(ac-ispell-requires 4))

   (eval-after-load "auto-complete"
     '(progn
         (ac-ispell-setup)))

   (defun my/enable-ac-ispell ()
     (add-to-list 'ac-sources 'ac-source-ispell))

   (add-hook 'git-commit-mode-hook 'my/enable-ac-ispell)
   (add-hook 'mail-mode-hook 'my/enable-ac-ispell)
