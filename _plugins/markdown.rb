=begin
  Jekyll tag to include Markdown text from _includes directory preprocessing with Liquid.
  Usage:
    {% markdown <filename> %}
  Dependency:
    - redcarpet
=end
module Jekyll
  class MarkdownTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end
    require "redcarpet"
    def render(context)
      tmpl = File.read File.join Dir.pwd, "_includes", @text
      site = context.registers[:site]
      tmpl = (Liquid::Template.parse tmpl).render site.site_payload
      html = Redcarpet::Markdown.new(Redcarpet::Render::HTML, {
        fenced_code_blocks: true,
        no_intra_emphasis: true,
        autolink: true,
        strikethrough: true
      }).render tmpl
    end
  end
end
Liquid::Template.register_tag('markdown', Jekyll::MarkdownTag)
