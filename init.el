(require 'package)

(add-to-list 'package-archives
             '("marmalade" . "http://marmalade-repo.org/packages/"))
(add-to-list 'package-archives
             '("melpa" . "http://melpa.org/packages/"))
(package-initialize)

(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(cperl-close-paren-offset -2)
 '(cperl-continued-statement-offset 2)
 '(cperl-indent-level 2)
 '(cperl-indent-parens-as-block t)
 '(cperl-tab-always-indent t)
 '(custom-safe-themes
   (quote
    ("90d329edc17c6f4e43dbc67709067ccd6c0a3caa355f305de2041755986548f2" "4f2c52e1e1f393f216c55f6ab00cdfb818a6229e6ffafee4c3dfbb31b2d0e42f" "76a8064217bcefb5872426ff60b89a8f161abdaacb9df11015c47ee5fd0b65df" "c4c2b95a9b178b7dc6064b0af431bd9c956f54f1815b8eb421a646fc61ba10d2" "4951ba3b639ad20fccd0c32ce810f1b956ce86c1560f29ad8fae6ab07134feca" "cf08ae4c26cacce2eebff39d129ea0a21c9d7bf70ea9b945588c1c66392578d1" "652f374e91a4c496f863048ea168ea4851f4a1ec3221460d7c6f8e8d1cf3cae2" "b7add38581dee0ac03a0350a9bc4bd0de5d348062231a7a6b7d9b8e22367814b" "5ee12d8250b0952deefc88814cf0672327d7ee70b16344372db9460e9a0e3ffc" "7f1263c969f04a8e58f9441f4ba4d7fb1302243355cb9faecb55aec878a06ee9" "05387e8ff6bd2bd5925a76ea92a830e1f02d75846c3e6df55516c6fbfebf6729" "52588047a0fe3727e3cd8a90e76d7f078c9bd62c0b246324e557dfa5112e0d0c" "896dac51439a180f03404822bddde0b187c578a0194f7b30094fededfae9719f" "1297a022df4228b81bc0436230f211bad168a117282c20ddcba2db8c6a200743" "1157a4055504672be1df1232bed784ba575c60ab44d8e6c7b3800ae76b42f8bd" "603a9c7f3ca3253cb68584cb26c408afcf4e674d7db86badcfe649dd3c538656" "40bc0ac47a9bd5b8db7304f8ef628d71e2798135935eb450483db0dbbfff8b11" "9b402e9e8f62024b2e7f516465b63a4927028a7055392290600b776e4a5b9905" "0251780e8e79d2a5e75eec7ee3b6c646b882495cb884d9dd32f30c60f9d65db6" "6cfe5b2f818c7b52723f3e121d1157cf9d95ed8923dbc1b47f392da80ef7495d" "fc5fcb6f1f1c1bc01305694c59a1a861b008c534cae8d0e48e4d5e81ad718bc6" "1e7e097ec8cb1f8c3a912d7e1e0331caeed49fef6cff220be63bd2a6ba4cc365" default)))
 '(js2-basic-offset 2)
 '(js2-bounce-indent-p t)
 '(org-startup-truncated nil)
 '(safe-local-variable-values
   (quote
    ((eval progn
           (put
            (quote defannotation)
            (quote clojure-doc-string-elt)
            2)
           (put
            (quote defendpoint)
            (quote clojure-doc-string-elt)
            3)
           (put
            (quote defsetting)
            (quote clojure-doc-string-elt)
            2)
           (put
            (quote setting/defsetting)
            (quote clojure-doc-string-elt)
            2)
           (define-clojure-indent
             (api-let 2)
             (assert 1)
             (assoc 1)
             (auto-parse 1)
             (catch-api-exceptions 0)
             (check 1)
             (checkp 1)
             (context 2)
             (create-database-definition 1)
             (ex-info 1)
             (execute-query 1)
             (execute-sql! 2)
             (expect 0)
             (expect-expansion 0)
             (expect-when-testing-engine 1)
             (expect-with-all-engines 0)
             (expect-with-engine 1)
             (expect-with-engines 1)
             (let-400 1)
             (let-404 1)
             (let-500 1)
             (match 1)
             (match-$ 1)
             (post-select 1)
             (pre-cascade-delete 1)
             (pre-insert 1)
             (pre-update 1)
             (project 1)
             (qp-expect-with-engines 1)
             (render-file 1)
             (resolve-private-vars 1)
             (select 1)
             (sync-in-context 2)
             (when-testing-engine 1)
             (with-redefs-fn 1)))
     (haskell-process-use-ghci . t)
     (haskell-indent-spaces . 4)
     (whitespace-line-column . 80)
     (lexical-binding . t))))
 '(send-mail-function (quote smtpmail-send-it)))

;; (custom-set-faces
;;  ;; custom-set-faces was added by Custom.
;;  ;; If you edit it by hand, you could mess it up, so be careful.
;;  ;; Your init file should contain only one such instance.
;;  ;; If there is more than one, they won't work right.
;;  '(default ((t (:inherit nil :stipple nil :background "White" :foreground "Black" :inverse-video nil :box nil :strike-through nil :overline nil :underline nil :slant normal :weight bold :height 150 :width extra-expanded :foundry "nil" :family "Monaco")))))

(when (not package-archive-contents)
  (package-refresh-contents))

;; (defvar my-packages
;;   '(
;;     ;;starter-kit
;;     starter-kit-lisp
;;     starter-kit-eshell
;;     starter-kit-bindings
;;     ac-slime
;;     markdown-mode
;;     maxframe
;;     js2-mode
;;     ))

;; (dolist (p my-packages)
;;   (when (not (package-installed-p p))
;;     (package-install p)))

;;; Maximize Frame
;; (maximize-frame)

;; add custom path to color-theme-load-path
(add-to-list 'custom-theme-load-path "~/.emacs.d/themes")


;; center screen around cursor
;; source - http://stackoverflow.com/questions/1249497/command-to-center-screen-horizontally-around-cursor-on-emacs
(defun my-horizontal-recenter ()
  "make the point horizontally centered in the window"
  (interactive)
  (let ((mid (/ (window-width) 2))
        (line-len (save-excursion (end-of-line) (current-column)))
        (cur (current-column)))
    (if (< mid cur)
        (set-window-hscroll (selected-window)
                            (- cur mid)))))

(global-set-key (kbd "C-S-l") 'my-hoTrizontal-recenter)


;; rainbow paranthesis
;; (require 'rainbow-delimiters)
;;  (global-rainbow-delimiters-mode)

;;;;;; starting comment

;; ;; source .zshrc
;; (let ((path (shell-command-to-string ". ~/.zshrc; echo -n $PATH")))
;;   (setenv "PATH" path)
;;   (setq exec-path 
;;         (append
;;          (split-string-and-unquote path ":")
;;          exec-path)))

;; ;; from http://stackoverflow.com/questions/10171280/how-to-launch-gui-emacs-from-command-line-in-osx
;; ;;========================================
;; ;; start the emacsserver that listens to emacsclient
;; ;; (server-start)

;; ;; zsh shell using inferior-shell
;; (setq explicit-shell-file-name "/bin/zsh")
;; (setq shell-file-name "zsh")
;; (setq explicit-bash.exe-args '("--noediting" "--login" "-i"))
;; (setenv "SHELL" shell-file-name)
;; (add-hook 'comint-output-filter-functions 'comint-strip-ctrl-m)

;;;;;;;; ending comment 


;; ;; Multiple Cursors Keybindings
(require 'multiple-cursors)

;; From active region to multiple cursors:
(global-set-key (kbd "C-S-c C-S-c") 'mc/edit-lines)
(global-set-key (kbd "C-S-c C-e") 'mc/edit-ends-of-lines)
(global-set-key (kbd "C-S-c C-a") 'mc/edit-beginnings-of-lines)

;; When you want to add multiple cursors not based on continuous lines, but based on keywords in the buffer, use:
(global-set-key (kbd "C->") 'mc/mark-next-like-this)
(global-set-key (kbd "C-<") 'mc/mark-previous-like-this)
(global-set-key (kbd "C-c C-<") 'mc/mark-all-like-this)

;; Rectangular region mode
(global-set-key (kbd "H-SPC") 'set-rectangular-region-anchor)

(setq idle-highlight t)
(setq idle-highlight-mode nil)

;; winner mode from Alex and Francis
(when (fboundp 'winner-mode)
  (winner-mode 1))

(load-file "/Users/punit/.emacs.d/my_kbd_macros.el")

;; this is to save cider's history
(setq cider-repl-history-file "~/.cider-history.eld")
(setq cider-repl-history-size 1000)

;; (require 'clojure-mode-extra-font-locking)

;; (add-to-list 'load-path "~/.emacs.d/elpa/color-theme-tomorrow/")
;; (load-file "~/.emacs.d/elpa/color-theme-tomorrow/color-theme-tomorrow.el")
;; (require 'color-theme-tomorrow)

(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )

(load-theme 'atom-dark)

(setq ring-bell-function 'ignore)

(global-visual-line-mode t)

(setq exec-path (append exec-path '("/usr/local/bin")))
(setenv "PATH" (concat "/usr/local/bin:" (getenv "PATH")))

;; advanced scala mode
(require 'ensime)
(add-hook 'scala-mode-hook 'ensime-scala-mode-hook)

(require 'ox-reveal)

(setq org-reveal-root "file:///Users/punit/Projects/fun/reveal.js")

(require 'neotree)
(global-set-key [f8] 'neotree-toggle)

(add-hook 'sh-mode-hook (lambda () (setq indent-tabs-mode t)))

;; intero mode for haskell files - https://commercialhaskell.github.io/intero/
(add-hook 'haskell-mode-hook 'intero-mode)

