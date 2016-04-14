;; set keys to move through frames http://sean.wenzel.net/docs/emacs/quick_reference/
(global-set-key (kbd "S-<up>") 'windmove-up)
(global-set-key (kbd "S-<down>") 'windmove-down)
(global-set-key (kbd "S-<right>") 'windmove-right)
(global-set-key (kbd "S-<left>") 'windmove-left)

;; set fn + arrow to move to start/end of line
(global-set-key [home] 'beginning-of-line)
(global-set-key [end] 'end-of-line)
(global-set-key [delete] 'delete-char)

;; kill region
(global-set-key "\C-x\C-k" 'kill-region)
(global-set-key "\C-x\C-o" 'delete-blank-lines)

;; rename buffer
(global-set-key "\C-c\C-n" 'rename-buffer)

;;rgrep
(global-set-key "\C-c\C-g" 'rgrep)

;; font from http://stackoverflow.com/questions/294664/how-to-set-the-font-size-in-emacs
;;(set-default-font "-apple-inconsolata-medium-r-normal--14-180-72-72-m-180-iso8859-1")
;;(set-default-font "-apple-monaco-medium-r-normal--15-180-72-72-m-180-iso8859-1")
(set-default-font "-apple-monaco-normal-normal-normal-*-15-*-*-*-*-*-iso8859-1")


;; textmate mode for emacs for find-file and other goodness
(require 'textmate)
(textmate-mode)

;; line numbers
(require 'linum)
(setq linum-format " %d")
(global-linum-mode t)

;; M+space to remove extra multiline whitespace
(defun multi-line-just-one-space (&optional n)
  "Multi-line version of just-one-space: Delete all
 spaces, tabs and newlines around point,
 leaving one space (or N spaces)."
  (interactive "*p")
  (let ((orig-pos (point)))
    (skip-chars-backward " \t\n")
    (constrain-to-field nil orig-pos)
    (dotimes (i (or n 1))
      (if (= (following-char) ?\s)
          (forward-char 1)
        (insert ?\s)))
    (delete-region
     (point)
     (progn
       (skip-chars-forward " \t\n")
       (constrain-to-field nil orig-pos t)))))
(global-set-key (kbd "M-SPC") 'multi-line-just-one-space)

(defun setup-clojure-indentation-rules ()
  (dolist (x '((case . 1)
               (defmethod . defn)
               (condp . 2)
               (are . let)
               (doto . defn)))
    (put (car x)
         'clojure-indent-function
         (if (numberp (cdr x))
             (cdr x)
           (get (cdr x) 'clojure-indent-function)))))

(defun clojure-mode-hook ()
  (setq indent-tabs-mode nil
        clojure-mode-use-backtracking-indent t)
  (setup-clojure-indentation-rules))

;; creates as many colums possible with 85 chars - Thanks to Ram
(defun 3col-view ()
  (interactive)
  (delete-other-windows)
  (save-excursion 
    (dotimes (i (1- (/ (/ (frame-pixel-width) (frame-char-width)) 85)))
      (split-window-horizontally 85)
      (other-window 1)
      (bury-buffer))
    (balance-windows)))

(global-set-key "\C-c3" '3col-view)

(global-set-key (kbd "s-r") 'revert-buffer)

;; use js2-mode for javascript files
(autoload 'js2-mode "js2" nil t)
(add-to-list 'auto-mode-alist '("\\.js$" . js2-mode))
(add-to-list 'auto-mode-alist '("\\.rt$" . html-mode))
(setq js2-basic-offet 2)
(setq js2-use-font-lock-faces t)

(remove-hook 'prog-mode-hook 'esk-turn-on-hl-line-mode)

;; dvorak useful keybindings
(load-file "/Users/punit/.emacs.d/dvorak.el")
(global-set-key (kbd "C-; d") 'dvorak-to-qwerty)
(global-set-key (kbd "C-; r") 'dvorak-to-qwerty-region)


;; clojure-test mode enhancements to make it work with Runa's
;; convention for paths of test files
;; for example for the ns foo.server.core
;; implementation path: src/foo/server/core.clj
;; test path: test/foo/test/server/core_test.clj

;; (defun runa-clojure-test-implementation-for (namespace)
;;   "Returns the path of the src file for the given test namespace."
;;   (let* ((namespace (clojure-underscores-for-hyphens namespace))
;;          (segments (split-string namespace "\\."))
;;          (namespace-end (split-string (car (last segments)) "_"))
;;          (namespace-end (mapconcat 'identity (butlast namespace-end 1) "_"))
;;          (impl-segments (append (butlast segments 1) (list namespace-end)))
;;          (runa-impl-segments (cons (first impl-segments) (rest (rest impl-segments)))))
;;     (format "%s/src/%s.clj"
;;             (locate-dominating-file buffer-file-name "src/")
;;             (mapconcat 'identity runa-impl-segments "/"))))

;; (defun runa-clojure-test-for (namespace)
;;   "Return the path of the test file for the given NAMESPACE."
;;   (let* ((namespace (clojure-underscores-for-hyphens namespace))
;;          (segments (split-string namespace "\\."))
;;          (runa-segments (cons (first segments) (cons "test" (rest segments)))))
;;     (format "%s/%s_test.clj"
;;             (file-name-as-directory
;;              (locate-dominating-file buffer-file-name "src/"))
;;             (mapconcat 'identity segments "/"))))


;; (defvar clojure-test-implementation-for-fn 'runa-clojure-test-implementation-for
;;   "Var pointing to the function that will return the full path of the
;; Clojure src file for the given test namespace.")

;; (defvar clojure-test-for-fn 'runa-clojure-test-for
;;   "The function that will return the full path of the Clojure test file for the given namespace.")

(setq org-todo-keywords
      '((sequence "TODO(t)" "|" "DONE(d)")
        (sequence "REPORT(r)" "BUG(b)" "KNOWNCAUSE(k)" "|" "FIXED(f)")
        (sequence "|" "CANCELED(c)")))

(add-to-list 'load-path "~/.emacs.d/vendor/emacs-w3m/")
(require 'w3m-load)

(setq browse-url-browser-function
      ;;'browse-url-default-browser)
      'w3m-browse-url)
(setq w3m-default-display-inline-images t)
(setq-default truncate-lines nil)


;; Use cperl-mode instead of the default perl-mode
(defalias 'perl-mode 'cperl-mode)

;; custom indentation for perl
; Use 2 space indents via cperl mode
(custom-set-variables
  '(cperl-close-paren-offset -2)
  '(cperl-continued-statement-offset 2)
  '(cperl-indent-level 2)
  '(cperl-indent-parens-as-block t)
  '(cperl-tab-always-indent t))


;; jsx angle bracket fix - http://jbm.io/2014/01/react-in-emacs-creature-comforts/
(defun modify-syntax-table-for-jsx ()
  (modify-syntax-entry ?< "(>")
  (modify-syntax-entry ?> ")<"))

(add-hook 'js2-mode-hook 'modify-syntax-table-for-jsx)

(add-to-list 'load-path "~/.emacs.d/elpa/react-snippets-20140120.1034")
(require 'react-snippets)


(add-to-list 'load-path "~/.emacs.d/elpa/cider")

;;; js2-mode indentation hack
(setq js-indent-level 2)
(custom-set-variables  
 '(js2-basic-offset 2)  
 '(js2-bounce-indent-p t))

(add-to-list 'auto-mode-alist '("\\.elixir2\\'" . elixir-mode))

(require 'elixir-mode)
